import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action";

import "./FormTodo.css";

const FormTodo = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask({ id: Date.now(), task });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </div>
    </form>
  );
};

export default connect(null, { addTask })(FormTodo);
