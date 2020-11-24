import React, { useReducer } from "react";
import { render } from "react-dom";
import TasksContext from "./contexts/tasks-context";
import { defaultState } from "./defaultState";
import { tasksReducer } from "./reducers/tasks-reducer";
import TaskList from "./components/task-list.jsx";

const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, defaultState);
  return (
    <React.StrictMode>
      <TasksContext.Provider value={[tasks, dispatch]}>
        <div className="container">
          <header>
            <h1>Todo App</h1>
          </header>
          <TaskList />
        </div>
      </TasksContext.Provider>
    </React.StrictMode>
  );
};

render(
  <App />,
  document.querySelector("#todo-app-container")
);