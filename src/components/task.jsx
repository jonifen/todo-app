import React, { useContext, useState } from "react";
import TasksContext from "../contexts/tasks-context";
import { editTaskInList } from "../actions/tasks-actions";

const Task = ({ taskKey }) => {
  const [tasks, dispatch] = useContext(TasksContext);
  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState(tasks[taskKey]);

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

  if (editMode) {
    return (
      <div data-testid="task-edit">
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
    <div data-testid="task">
      <span data-testid="task-label">
        {task.task}
      </span>
      <div className="icon-container">
        <span data-testid="task-edit" onClick={() => { setEditMode(true); }}>edit</span>
        <span data-testid="task-delete" onClick={() => { dispatch({ type: "delete", key: taskKey }); }}>delete</span>
      </div>
    </div>
  );
};

export default Task;