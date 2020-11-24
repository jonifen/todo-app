import React from "react";
import { screen, fireEvent, render, cleanup } from "@testing-library/react";
import Task from "../../components/task.jsx";
import TasksContext from "../../contexts/tasks-context";

const state = {
  "a": {
    task: "Test the task component",
    completed: false
  },
  "b": {
    task: "Test a completed task",
    completed: true
  }
};
const mockDispatch = jest.fn(() => {});

describe("<Task /> (Non-complete task)", () => {
  const taskKey = "a";

  beforeEach(() => {
    render(
      <TasksContext.Provider value={[state, mockDispatch]}>
        <Task taskKey={taskKey} />
      </TasksContext.Provider>
    );
  });
  
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render a textbox for entering a task", () => {
    // Arrange
    const taskInput = screen.getByTestId("task-label");

    // Assert
    expect(taskInput).toBeDefined();
  });

  it("should call dispatch when clicking delete", () => {
    // Arrange
    const taskDelete = screen.getByTestId("task-delete");

    // Act
    fireEvent.click(taskDelete);

    // Assert
    expect(mockDispatch.mock.calls.length).toBe(1);
  });

  it("should display an input box after clicking edit", () => {
    // Arrange
    const taskEdit = screen.getByTestId("task-edit");

    // Act
    fireEvent.click(taskEdit);

    // Assert
    const editInput = screen.getByTestId("task-edit-input");
    expect(editInput).toBeDefined();
  });

  it("should display an option to save after clicking edit", () => {
    // Arrange
    const taskEdit = screen.getByTestId("task-edit");

    // Act
    fireEvent.click(taskEdit);

    // Assert
    const saveControl = screen.getByTestId("task-edit-save");
    expect(saveControl).toBeDefined();
  });

  it("should display an option to cancel after clicking edit", () => {
    // Arrange
    const taskEdit = screen.getByTestId("task-edit");

    // Act
    fireEvent.click(taskEdit);

    // Assert
    const cancelControl = screen.getByTestId("task-edit-cancel");
    expect(cancelControl).toBeDefined();
  });

  it("should call dispatch after clicking edit, and then save", () => {
    // Arrange
    const taskEdit = screen.getByTestId("task-edit");
    fireEvent.click(taskEdit);
    const saveControl = screen.getByTestId("task-edit-save");

    // Act
    fireEvent.click(saveControl);

    // Assert
    expect(mockDispatch.mock.calls.length).toBe(1);
  });

  it("should return to non-edit view after clicking edit, and then cancel", () => {
    // Arrange
    const taskEdit = screen.getByTestId("task-edit");
    fireEvent.click(taskEdit);
    const cancelControl = screen.getByTestId("task-edit-cancel");

    // Act
    fireEvent.click(cancelControl);

    // Assert
    const taskInput = screen.getByTestId("task-label");
    expect(taskInput).toBeDefined();
  });

  it("should call dispatch when clicking complete", () => {
    // Arrange
    const taskComplete = screen.getByTestId("task-complete");

    // Act
    fireEvent.click(taskComplete);

    // Assert
    expect(mockDispatch.mock.calls.length).toBe(1);
  });
});

describe("<Task /> (Completed task)", () => {
  const taskKey = "b";

  beforeEach(() => {
    render(
      <TasksContext.Provider value={[state, mockDispatch]}>
        <Task taskKey={taskKey} />
      </TasksContext.Provider>
    );
  });
  
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render a textbox for entering a task", () => {
    // Arrange
    const expected = "completed";
    const task = screen.getByTestId("task");

    // Assert
    expect(task.classList.contains(expected)).toBe(true);
  });
});