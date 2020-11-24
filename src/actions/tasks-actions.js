import { v4 as uuidv4 } from "uuid";

export const addTaskToList = (value) => (
  {
    type: "add",
    key: uuidv4(),
    value
  }
);

export const deleteTaskFromList = (key) => (
  {
    type: "delete",
    key
  }
);

export const editTaskInList = (key, value) => (
  {
    type: "edit",
    key,
    value
  }
);

export const toggleTaskCompletionInList = (key) => (
  {
    type: "toggle-completion",
    key
  }
);