import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  FILTER_TASKS,
  TOGGLE_COMPLETE,
  LOCAL_STORAGE,
} from "./action";

const initialState = {
  tasks: [],
  filteredTasks: [],
};

// const loadTasksFromLocalStorage = () => {
//   const savedTasks = localStorage.getItem("tasks");
//   return savedTasks ? JSON.parse(savedTasks) : initialState;
// };

const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? { tasks: JSON.parse(savedTasks), filteredTasks: JSON.parse(savedTasks) } : initialState;
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = action.payload;
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        filteredTasks: state.filteredTasks.concat(newTask),
      };

    case DELETE_TASK:
      const updatedTasksAfterDelete = state.tasks.filter(
        (task) => task.id !== action.payload,
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksAfterDelete));
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        filteredTasks: state.filteredTasks.filter(
          (task) => task.id !== action.payload,
        ),
      };

    case UPDATE_TASK:
      const updatedTasksAfterUpdate = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task,
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksAfterUpdate));
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, task: action.payload.task }
            : task,
        ),
        filteredTasks: state.filteredTasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, task: action.payload.task }
            : task,
        ),
      };

    case FILTER_TASKS:
      const { filterText, filterType } = action.payload;
      const filteredByText = state.tasks.filter((task) =>
        task.task.toLowerCase().includes(filterText.toLowerCase()),
      );

      const filteredTasks =
        filterType === "completed"
          ? filteredByText.filter((task) => task.complete)
          : filterType === "notCompleted"
            ? filteredByText.filter((task) => !task.complete)
            : filteredByText;

      return {
        ...state,
        filteredTasks,
        filterType,
      };
    case TOGGLE_COMPLETE:
      const updatedTasksAfterToggle = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, complete: !task.complete }
          : task,
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksAfterToggle));
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, complete: !task.complete }
            : task,
        ),
        filteredTasks: state.filteredTasks.map((task) =>
          task.id === action.payload
            ? { ...task, complete: !task.complete }
            : task,
        ),
      };
    case LOCAL_STORAGE:
      const loadedTasks = loadTasksFromLocalStorage();
      return {
        ...state,
        tasks: loadedTasks.tasks,
        filteredTasks: loadedTasks.filteredTasks, 
      };

    default:
      return state;
  }
};

export default taskReducer;
