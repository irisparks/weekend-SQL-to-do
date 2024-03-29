const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000; // if this exisit us that, if false, use 5000
const taskRouter = require('./routes/task.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/task', taskRouter)


// Start listening for requests on a specific port
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });