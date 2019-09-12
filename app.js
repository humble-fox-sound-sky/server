if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const port = 3000;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/skySound', {
  useNewUrlParser: true
});

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

const post = require('./routes/post')

app.use('/', post)
app.use('./middlewares/errHandler.js')

app.listen(port, () => console.log(`Example app listening on port port`))