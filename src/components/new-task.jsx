import React, { useContext, useState } from "react";
import TasksContext from "../contexts/tasks-context";
import { addTaskToList } from "../actions/tasks-actions";

const NewTask = () => {
  const defaultTask = { completed: false, task: ""};
  const [tasks, dispatch] = useContext(TasksContext);
  const [task, setTask] = useState({...defaultTask});

  const onChangeValueEvent = (event) => {
    setTask({
      ...task,
      task: event.target.value
    });
  };

  const onAddClickEvent = () => {
    if (task.task.length > 0) {
      dispatch(addTaskToList(task));
    }
    setTask({...defaultTask});
  };

  return (
    <div data-testid="new-task" className="task task-edit">
      <input
        data-testid="new-task-input"
        type="text"
        value={task.task}
        onChange={onChangeValueEvent}
        onBlur={onChangeValueEvent}
        placeholder="Add new task"
      ></input>
      <div className="icon-container">
        <span data-testid="new-task-add" className="icon icon-plus" onClick={onAddClickEvent}></span>
      </div>
    </div>
  );
};

export default NewTask;