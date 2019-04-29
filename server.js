const express = require("express");
const helmet = require("helmet");

const action = require("./routes/action");
const project = require("./routes/project");

const server = express();

//server uses
server.use(express.json());
server.use(helmet());

//routes
server.use("/api/action", action);
server.use("/api/project", project);

//test endpoint
server.get("/", (req, res) => {
  res.send(`
    <h1>loaded</h1>`);
});

module.exports = server;
