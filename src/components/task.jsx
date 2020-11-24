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
      <div data-testid="task-edit" className={completedClassName}>
        <input
          data-testid="task-edit-input"
          type="text"
          value={task.task}
          onChange={onChangeValueEvent}
          onBlur={onChangeValueEvent}
        ></input>
        <div className="icon-container">
          <span data-testid="task-edit-save" onClick={onSaveClickEvent}>save</span>
          <span data-testid="task-edit-cancel" onClick={onCancelEditEvent}>cancel</span>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="task" className={completedClassName}>
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
        <span data-testid="task-edit" onClick={() => { setEditMode(true); }}>edit</span>
        <span data-testid="task-delete" onClick={() => { dispatch(deleteTaskFromList(taskKey)); }}>delete</span>
      </div>
    </div>
  );
};

export default Task;