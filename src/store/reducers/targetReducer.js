const initState = {
  targets: []
};

const targetReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TARGET":
      console.log("created target", action.target);
      return state;
    case "CREATE_TARGET_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default targetReducer;
