import "./App.css";
import FilterTodo from "./component/FilterTodo";
import FormTodo from "./component/FormTodo";
import Preloader from "./component/Preloder";
import { useDispatch } from "react-redux";
import { LOCAL_STORAGE } from "./redux/action";
import { useState, useEffect } from "react";
import Luffy from "./images/luffy.png";
import TaskList from "./component/TaskList";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: LOCAL_STORAGE });
  }, [dispatch]);

  return (
    <div className="app">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <img src={Luffy} alt="luffy" className="luffy" />
          <h1 className="title">Todo List </h1>
          <FormTodo />
          <FilterTodo />
          <TaskList />
        </>
      )}
    </div>
  );
}

export default App;
