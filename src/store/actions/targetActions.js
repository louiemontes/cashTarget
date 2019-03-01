export const createTarget = target => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // something async to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("targets")
      .add({
        ...target,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
