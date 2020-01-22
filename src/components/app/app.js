import React, { useState, useEffect } from "react";
import AddPlan from "../add-plan/";
import Filter from "../filter/";
import CurrentDate from "../date/";
import PlanList from "../plan-list/";
import Context from "../context";
import Spinner from "../spinner";
import "./app.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([
    { id: 1, title: "all", active: true },
    { id: 2, title: "today", active: false },
    { id: 3, title: "done", active: false }
  ]);
  const [filteredTodos, setFilteredTodos]= useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setFilteredTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function onCheck(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removePlan(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addPlan(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  function filterStatusHandler(status) {
    setFilters(
      filters.map(filter => {
        filter.active = false;
        if (filter.title === status) {
          filter.active = !filter.active;
        }
        return filter;
      })
    );
    filteredPlans(status)
  }

  function filteredPlans(status) {
    if (status === "done") {      
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    } else {
      return setFilteredTodos(todos);
    }
  }

  return (
    console.log(filteredTodos),
    <Context.Provider value={{ removePlan, onCheck }}>
      <div className="wrapper">
        <div className="container">
          <h1 className="myPlans__title">My Plans</h1>

          <AddPlan addPlan={addPlan} />

          <Filter filters={filters} filterStatus={filterStatusHandler} />

          <div className="plans">
            <div className="plans__element">
              <CurrentDate />

              {loading && <Spinner />}
              {todos.length ? (
                <div className="plans__data">
                  <PlanList todos={filteredTodos} onCheck={onCheck} />
                </div>
              ) : loading ? null : (
                <p>No Plans!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
