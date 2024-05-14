// task-service/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define CRUD endpoints for tasks
// Example: GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to task-service..." });
});

app.get("*", (req, res) => {
    return res.status(404).json({ message: "404! Page Not Found..." });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Task service is running on port ${PORT}`);
});
