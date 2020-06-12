import React, { Fragment } from "react";
import "./App.css";

//Components
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo></InputTodo>
        <ListTodo></ListTodo>
      </div>
    </Fragment>
  );
}

export default App;
