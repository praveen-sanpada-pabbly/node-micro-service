// attachment-service/index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define CRUD endpoints for attachments
// Example: GET /attachments, POST /attachments, PUT /attachments/:id, DELETE /attachments/:id

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to attachment-service..." });
});

app.get("*", (req, res) => {
    return res.status(404).json({ message: "404! Page Not Found..." });
});

const PORT = process.env.PORT || 4004;
app.listen(PORT, () => {
    console.log(`Attachment service is running on port ${PORT}`);
});
