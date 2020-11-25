import React from "react";
import { getByTestId, screen, render, cleanup, fireEvent } from "@testing-library/react";
import TaskList from "../../components/task-list.jsx";
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

describe("<TaskList />", () => {
  beforeEach(() => {
    render(
      <TasksContext.Provider value={[state, mockDispatch]}>
        <TaskList />
      </TasksContext.Provider>
    );
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render the component without crashing", () => {
    const taskList = screen.getByTestId("task-list");
    expect(taskList).toBeDefined();
  });

  it("should show two tasks when completed tasks are shown (default behaviour)", () => {
    const tasks = screen.getByTestId("tasks");
    expect(tasks.children.length).toBe(2);
  });

  it("should show one task when completed tasks are hidden", () => {
    // Arrange
    const completedTasksToggle = screen.getByTestId("toggle-completed-tasks");

    // Act
    fireEvent.click(completedTasksToggle);

    // Assert
    const tasks = screen.getByTestId("tasks");
    expect(tasks.children.length).toBe(1);
  });
});