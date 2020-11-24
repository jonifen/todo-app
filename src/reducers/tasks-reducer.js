export const tasksReducer = (state, action) => {
  let newState = {...state};

  if (action.type === "add") {
    newState[action.key] = action.value;
  }

  return newState;
};