// comment-service/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define CRUD endpoints for comments
// Example: GET /comments, POST /comments, PUT /comments/:id, DELETE /comments/:id

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to comment-service..." });
});

app.get("*", (req, res) => {
    return res.status(404).json({ message: "404! Page Not Found..." });
});

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
    console.log(`Comment service is running on port ${PORT}`);
});
