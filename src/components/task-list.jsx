import React, { useContext, useState } from "react";
import NewTask from "./new-task.jsx";
import Task from "./task.jsx";
import TasksContext from "../contexts/tasks-context";

const TaskList = () => {
  const [tasks] = useContext(TasksContext);
  const [showCompleted, setShowCompleted] = useState(true);

  const tasksArray = Object.entries(tasks);
  const tasksToDisplay = tasksArray.filter(task => {
    if (!task[1].completed || showCompleted) {
      return task;
    }
  });

  return (
    <div data-testid="task-list" className="list">
      <div data-testid="task-list-filter" className="filter">
        <input data-testid="toggle-completed-tasks" type="button" value={`${showCompleted ? "Hide" : "Show"} Completed Tasks`} onClick={() => setShowCompleted(!showCompleted)} />
      </div>
      <NewTask />
      <div data-testid="tasks">
      {
        tasksToDisplay && tasksToDisplay.map(task => (
          <Task key={task[0]} taskKey={task[0]} />
        ))
      }
      </div>
    </div>
  );
};

export default TaskList;