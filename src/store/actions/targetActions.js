export const createTarget = target => {
  return (dispatch, getState) => {
    // something async to db
    dispatch({ type: "CREATE_TARGET", target });
  };
};
