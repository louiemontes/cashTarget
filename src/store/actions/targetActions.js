export const createTarget = target => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // something async to db
    const firestore = getFirestore();
    firestore
      .collection("targets")
      .add({
        ...target,
        authorFirstName: "Luis",
        authorLastName: "Montes",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_TARGET", target });
      })
      .catch(e => {
        dispatch({ type: "CREATE_TARGET_ERROR", e });
      });
  };
};
