import React from "react";
import { getByTestId, render, cleanup } from "@testing-library/react";
import TaskList from "../../components/task-list.jsx";

afterEach(cleanup);

describe("<TaskList/>", () => {
  it("should render the component without crashing", () => {
    const { getByTestId } = render(<TaskList />);
  });
});