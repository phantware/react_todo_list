import React, { Fragment, useEffect, useState } from "react";

const ListTodo = () => {
  const [todos, setTodo] = useState([]);
  const getTodo = async () => {
    try {
      const response = fetch("http://localhost:5000/todos");
      const jsonData = await (await response).json();
      setTodo(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
