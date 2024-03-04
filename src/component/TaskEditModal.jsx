import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTask } from "../redux/action";
import { motion, AnimatePresence } from "framer-motion";

import "./TaskEditModal.css";

const TaskEditModal = ({ task, updateTask, onClose }) => {
  const [newTask, setNewTask] = useState(task.task);

  const handleSave = () => {
    updateTask({ ...task, task: newTask });
    onClose();
  };

  return (
    <div className="modal">
      <AnimatePresence>
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          exit={{
            scale: 0,
          }}
          className="modal-content"
        >
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0, rotate: "2.5deg" }}
              onClick={handleSave}
            >
              Save
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0, rotate: "2.5deg" }}
              onClick={onClose}
            >
              Cancel
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { updateTask })(TaskEditModal);
