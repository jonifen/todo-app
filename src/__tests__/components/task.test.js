import React from "react";
import { screen, fireEvent, render, cleanup } from "@testing-library/react";
import Task from "../../components/task.jsx";
import TasksContext from "../../contexts/tasks-context";

const state = {
  "a": {
    task: "Test the task component",
    completed: false
  }
};
const taskKey = "a";
const mockDispatch = jest.fn(() => {});

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

describe("<Task />", () => {
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
});