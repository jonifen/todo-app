import React, { useContext, useState } from "react";
import TasksContext from "../contexts/tasks-context";

const Task = ({ taskKey }) => {
  const [tasks, dispatch] = useContext(TasksContext);
  const [task, setValue] = useState(tasks[taskKey]);

  return (
    <div data-testid="task">
      <span data-testid="task-label">
        {task.task}
      </span>
      <div className="icon-container">
        <span data-testid="task-delete" onClick={() => { dispatch({ type: "delete", key: taskKey }); }}>delete</span>
      </div>
    </div>
  );
};

export default Task;