import React, { useContext, useEffect, useState } from "react";
import TasksContext from "../contexts/tasks-context";
import { editTaskInList, deleteTaskFromList, toggleTaskCompletionInList } from "../actions/tasks-actions";

const Task = ({ taskKey }) => {
  const [tasks, dispatch] = useContext(TasksContext);
  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState(tasks[taskKey]);

  useEffect(() => {
    setTask(tasks[taskKey]);
  }, [tasks]);

  const onChangeValueEvent = (event) => {
    setTask({
      ...task,
      task: event.target.value
    });
  };

  const onSaveClickEvent = () => {
    dispatch(editTaskInList(taskKey, task));
    setEditMode(false);
  };

  const onCancelEditEvent = () => {
    setTask(tasks[taskKey]);
    setEditMode(false);
  };

  const completedClassName = task.completed ? "completed" : "";

  if (editMode) {
    return (
      <div data-testid="task-edit" className="task task-edit">
        <input
          data-testid="task-edit-input"
          type="text"
          value={task.task}
          onChange={onChangeValueEvent}
          onBlur={onChangeValueEvent}
        ></input>
        <div className="icon-container">
          <span data-testid="task-edit-save" className="icon icon-checkmark" onClick={onSaveClickEvent}></span>
          <span data-testid="task-edit-cancel" className="icon icon-cross" onClick={onCancelEditEvent}></span>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="task" className={`task ${completedClassName}`}>
      <input
        id={`${taskKey}-complete`}
        data-testid="task-complete"
        type="checkbox"
        checked={task.completed}
        onChange={() => { dispatch(toggleTaskCompletionInList(taskKey)); }}
        value={task.task}
      />
      <label htmlFor={`${taskKey}-complete`} data-testid="task-label">
        {task.task}
      </label>
      <div className="icon-container">
        <span data-testid="task-edit" className="icon icon-pencil" onClick={() => { setEditMode(true); }}></span>
        <span data-testid="task-delete" className="icon icon-bin2" onClick={() => { dispatch(deleteTaskFromList(taskKey)); }}></span>
      </div>
    </div>
  );
};

export default Task;