import React, { useContext } from "react";
import NewTask from "./new-task.jsx";
import Task from "./task.jsx";
import TasksContext from "../contexts/tasks-context";

const TaskList = () => {
  const [tasks] = useContext(TasksContext);

  return (
    <div>
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