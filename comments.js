//Create web server
const express = require('express');
const app = express();
//Create database connection
const db = require('./db');
//Create middleware
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
//Create routes
const comments = require('./routes/comments');
//Create port
const port = process.env.PORT || 3000;
//Create static path
app.use(express.static(path.join(__dirname, 'public')));
//Use middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
//Use routes
app.use('/comments', comments);
//Start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));
