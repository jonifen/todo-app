import React from "react";
import { getByTestId, screen, fireEvent, render, cleanup } from "@testing-library/react";
import NewTask from "../../components/new-task.jsx";
import TasksContext from "../../contexts/tasks-context";

const state = {};
const mockDispatch = jest.fn(() => {});

beforeEach(() => {
  render(
    <TasksContext.Provider value={[state, mockDispatch]}>
      <NewTask />
    </TasksContext.Provider>
  );
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("<NewTask />", () => {
  it("should render a textbox for entering a task", () => {
    const taskInput = screen.getByTestId("new-task-input");
    expect(taskInput).toBeDefined();
  });

  it("should render an item for adding a task", () => {
    const addElement = screen.getByTestId("new-task-add");
    expect(addElement).toBeDefined();
  });

  it("should dispatch an action when new task added", () => {
    fireEvent.change(screen.getByTestId("new-task-input"), {
      target: {
        value: "Add new task"
      }
    });

    fireEvent.click(screen.getByTestId("new-task-add"));

    expect(mockDispatch.mock.calls.length).toBe(1);
  });

  it("should not dispatch an action when empty new task added", () => {
    fireEvent.change(screen.getByTestId("new-task-input"), {
      target: {
        value: ""
      }
    });

    fireEvent.click(screen.getByTestId("new-task-add"));

    expect(mockDispatch.mock.calls.length).toBe(0);
  });
});