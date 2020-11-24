import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>Todo App</div>
  );
};

render(
  <App />,
  document.querySelector("#todo-app-container")
);