import { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/action";
import { motion, AnimatePresence } from "framer-motion";
import TaskEditModal from "./TaskEditModal";
import Close from "../images/Close.png";
import Done from "../images/done.svg";
import NotDone from "../images/notDone.png";
import Edit from "../images/endit.png";
import "./TaskList.css";

const TaskList = ({ filteredTasks, deleteTask, toggleComplete }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleUpdate = (task) => {
    setSelectedTask(task);
    setEditModalOpen(true);
  };
  const handleToggleComplete = (taskId) => {
    toggleComplete(taskId);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="Task-container">
      <AnimatePresence>
        <ul>
          {filteredTasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{
                translateX: "-100%",
              }}
              animate={{
                translateX: "0",
              }}
              exit={{
                scale: 0,
                translateX: 0,
              }}
              className={`${task.complete ? "done" : " "}`}
            >
              {task.task}
              <div className="button-task">
                <button onClick={() => handleUpdate(task)}>
                  <img src={Edit} alt="edit" />
                </button>
                <button onClick={() => handleDelete(task.id)}>
                  <img src={Close} alt="Delete" />
                </button>
                <button onClick={() => handleToggleComplete(task.id)}>
                  <img src={task.complete ? Done : NotDone} alt="don" />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
      {editModalOpen && (
        <TaskEditModal task={selectedTask} onClose={closeEditModal} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredTasks: state.filteredTasks || state.tasks,
});

export default connect(mapStateToProps, {
  deleteTask,
  toggleComplete,
})(TaskList);
