export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FILTER_TASKS = "FILTER_TASKS";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const LOCAL_STORAGE = "LOCAL_STORAGE";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId });

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const filterTasks = ({ filterText, filterType }) => ({
  type: FILTER_TASKS,
  payload: { filterText, filterType },
});

export const toggleComplete = (taskId) => ({
  type: TOGGLE_COMPLETE,
  payload: taskId,
});

export const initTasksFromLocalStorage = (tasks) => ({
  type: LOCAL_STORAGE,
  payload: tasks,
});
