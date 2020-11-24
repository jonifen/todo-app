export const tasksReducer = (state, action) => {
  let newState = {...state};

  if (action.type === "add" || action.type === "edit") {
    newState[action.key] = action.value;
  } else if (action.type === "delete") {
    delete newState[action.key];
  } else if (action.type === "complete") {
    newState[action.key] = {
      ...newState[action.key],
      completed: true
    };
  }

  return newState;
};