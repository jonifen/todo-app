import { tasksReducer } from "../../reducers/tasks-reducer";

describe("TasksReducer", () => {
  it("should return state with a newly added item", () => {
    // Arrange
    const currentState = {};
    const action = {
      type: "add",
      key: "abc",
      value: {
        value: "Add an task to the list",
        completed: false
      }
    };
    const expected = {
      "abc": {
        value: "Add an task to the list",
        completed: false
      }
    };

    // Act
    const actual = tasksReducer(currentState, action);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it("should return empty state when called with an unsupported type", () => {
    // Arrange
    const currentState = {};
    const action = {
      type: "junk",
      key: "abc",
      value: {
        value: "Try to do something with a junk type",
        completed: false
      }
    };
    const expected = {};

    // Act
    const actual = tasksReducer(currentState, action);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it("should return empty state if deleting an item", () => {
    // Arrange
    const currentState = {
      "abc": {
        value: "Task that is no longer going to happen",
        completed: false
      }
    };
    const action = {
      type: "delete",
      key: "abc",
      value: {}
    };
    const expected = {};

    // Act
    const actual = tasksReducer(currentState, action);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it("should return state with a edited existing item", () => {
    // Arrange
    const currentState = {
      "abc": {
        value: "an existing task",
        completed: false
      }
    };
    const action = {
      type: "edit",
      key: "abc",
      value: {
        value: "Edit an existing task",
        completed: false
      }
    };
    const expected = {
      "abc": {
        value: "Edit an existing task",
        completed: false
      }
    };

    // Act
    const actual = tasksReducer(currentState, action);

    // Assert
    expect(actual).toStrictEqual(expected);
  });
});