
const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./app/router/user');

const app = express();
app.use(bodyParser.json());
app.use('/user', userRouter);
app.listen(8000, () => {
  console.log(`Server is running on port ${8000} !`);
});
