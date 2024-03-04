import "./App.css";
import FilterTodo from "./component/FilterTodo";
import FormTodo from "./component/FormTodo";
import { useDispatch } from "react-redux";
import { LOCAL_STORAGE } from "./redux/action";
import { useEffect } from "react";
import TaskList from "./component/TaskList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOCAL_STORAGE });
  }, [dispatch]);

  return (
    <div className="app">
      <h1 className="title">Todo List </h1>
      <FormTodo />
      <FilterTodo />
      <TaskList />
    </div>
  );
}

export default App;
