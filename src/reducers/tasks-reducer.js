export const tasksReducer = (state, action) => {
  let newState = {...state};

  if (action.type === "add") {
    newState[action.key] = action.value;
  } else if (action.type === "delete") {
    delete newState[action.key];
  }

  return newState;
};