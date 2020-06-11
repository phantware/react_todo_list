const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.Port || 5000;
app.listen(port, console.log(`Listening on ${port}`));
