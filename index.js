const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// cwd is the current working directory
const cwd = process.cwd();

// The process.env.PORT is used to set the port number for the server
const PORT = process.env.PORT || 3001;
// we are using the express() method to create a new Express.js server
const app = express();

//this has to be true for the server to work because it is a json file
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// this function is used to connect to the database
db.once('open', () => {
  app.listen(PORT, () => {
    // console.log is used to print a message to the console
    console.log(`API server running on port ${PORT}!`);
    
  });
});