import React from "react";
import { getByTestId, render, cleanup } from "@testing-library/react";
import Task from "../../components/task.jsx";

afterEach(cleanup);

describe("<Task />", () => {
  it("should render the component without crashing", () => {
    const { getByTestId } = render(<Task />);
  });
});