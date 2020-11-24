import React, { useContext } from "react";
import NewTask from "./new-task.jsx";
import Task from "./task.jsx";
import TasksContext from "../contexts/tasks-context";

const TaskList = () => {
  const [tasks] = useContext(TasksContext);

  return (
    <div data-testid="task-list" className="list">
      <NewTask />
      {
        tasks && Object.keys(tasks).map(key => (
          <Task key={key} taskKey={key} />
        ))
      }
    </div>
  );
};

export default TaskList;