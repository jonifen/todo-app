import { v4 as uuidv4 } from "uuid";

export const addTaskToList = (value) => (
  {
    type: "add",
    key: uuidv4(),
    value
  }
);