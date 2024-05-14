// proxy-server - index.js
const express = require('express');
const httpProxy = require('http-proxy');

const app = express();

// Create a proxy for each microservice
const taskServiceProxy = httpProxy.createProxyServer({ target: 'http://localhost:4001' });
const userServiceProxy = httpProxy.createProxyServer({ target: 'http://localhost:4002' });
const commentServiceProxy = httpProxy.createProxyServer({ target: 'http://localhost:4003' });
const attachmentServiceProxy = httpProxy.createProxyServer({ target: 'http://localhost:4004' });

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to proxy-server..." });
});

// app.get("*", (req, res) => {
//     return res.status(404).json({ message: "404! Page Not Found..." });
// });

// Proxy middleware for each microservice endpoint
app.use('/tasks', (req, res) => {
    taskServiceProxy.web(req, res);
});

app.use('/users', (req, res) => {
    userServiceProxy.web(req, res);
});

app.use('/comments', (req, res) => {
    commentServiceProxy.web(req, res);
});

app.use('/attachments', (req, res) => {
    attachmentServiceProxy.web(req, res);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
