
if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sound-sky-humble', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('mongodb is connected');
});

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

const post = require('./routes/post')
const errorHandler = require('./middlewares/errHandler')

app.use('/post', post)
app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port port`))