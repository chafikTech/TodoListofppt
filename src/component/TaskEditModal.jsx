import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTask } from "../redux/action";

import "./TaskEditModal.css";

const TaskEditModal = ({ task, updateTask, onClose }) => {
  const [newTask, setNewTask] = useState(task.task);

  const handleSave = () => {
    updateTask({ ...task, task: newTask });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <div className="input">
          <input
            type="text"
            value={newTask}
            placeholder="New Task Name"
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { updateTask })(TaskEditModal);
