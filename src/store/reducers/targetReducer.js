const initState = {
  targets: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};

const targetReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TARGET":
      console.log("created target", action.target);
  }
  return state;
};

export default targetReducer;
