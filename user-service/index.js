// user-service/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define CRUD endpoints for users
// Example: GET /users, POST /users, PUT /users/:id, DELETE /users/:id

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to user-service..." });
});

app.get("*", (req, res) => {
    return res.status(404).json({ message: "404! Page Not Found..." });
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
