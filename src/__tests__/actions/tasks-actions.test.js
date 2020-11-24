import { v4 as uuidv4 } from "uuid";
import { addTaskToList, deleteTaskFromList, editTaskInList } from "../../actions/tasks-actions";

jest.mock("uuid");

describe("Tasks Actions", () => {
  test("should return an add object suitable for reducer dispatch", () => {
    // Arrange
    const input = {
      task: "Add a task to the list",
      completed: false
    };
    const mockKey = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";

    uuidv4.mockImplementation(() => mockKey);

    const expected = {
      type: "add",
      key: mockKey,
      value: input
    }

    // Act
    const actual = addTaskToList(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  test("should return a delete object suitable for reducer dispatch", () => {
    // Arrange
    const input = "a";

    const expected = {
      type: "delete",
      key: input
    }

    // Act
    const actual = deleteTaskFromList(input);

    //Assert
    expect(actual).toStrictEqual(expected);
  });

  test("should return an edit object suitable for reducer dispatch", () => {
    // Arrange
    const inputKey = "a";
    const inputValue = "Edit an item in the list"

    const expected = {
      type: "edit",
      key: inputKey,
      value: inputValue
    }

    // Act
    const actual = editTaskInList(inputKey, inputValue);

    //Assert
    expect(actual).toStrictEqual(expected);
  });
});