const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "insert into todo(description) values($1) RETURNING *",
      [description]
    );
    res.status(200).json(newTodo.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error(error.message);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const allTodo = await pool.query("select * from todo");
    res.status(200).json(allTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    singleTodo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
    res.status(200).json(singleTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE id = $2 RETURNING *",
      [description, id]
    );
    res.status(200).json(updateTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todo WHERE id = $1 RETURNING *",
      [id]
    );
    res.status(200).json(deleteTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

const port = process.env.Port || 5000;
app.listen(port, console.log(`Listening on ${port}`));
