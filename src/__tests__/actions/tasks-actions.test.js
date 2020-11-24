import { v4 as uuidv4 } from "uuid";
import { addTaskToList } from "../../actions/tasks-actions";

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
});