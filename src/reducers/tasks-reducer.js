export const tasksReducer = (state, action) => {
  let newState = {...state};

  if (action.type === "add" || action.type === "edit") {
    newState[action.key] = action.value;
  } else if (action.type === "delete") {
    delete newState[action.key];
  } else if (action.type === "toggle-completion") {
    newState[action.key] = {
      ...newState[action.key],
      completed: !newState[action.key].completed
    };
  }

  return newState;
};