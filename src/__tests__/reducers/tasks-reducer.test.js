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
});