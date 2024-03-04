import React from "react";
import { connect } from "react-redux";
import { filterTasks } from "../redux/action";
import "./FilterTodo.css";

const FilterTodo = ({ filterTasks, filterType }) => {
  const handleFilterChange = (e) => {
    filterTasks({ filterText: e.target.value, filterType });
  };

  const handleFilterTypeChange = (e) => {
    filterTasks({ filterText: "", filterType: e.target.value });
  };

  return (
    <div className="form-group">
      <input
        type="text"
        id="filter"
        className="form-control"
        placeholder="Enter filter text"
        onChange={handleFilterChange}
      />
      <select
        id="filterType"
        className="form-control"
        onChange={handleFilterTypeChange}
        value={filterType}
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filterType: state.filterType || "all",
});

export default connect(mapStateToProps, { filterTasks })(FilterTodo);
