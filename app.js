
if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

mongoose.connect(process.env.ATLAS_CONNECT, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB database')
  }).catch((err) => {
    console.log(err, 'Could not connected to MongoDB database')
  })

const post = require('./routes/post')
const errorHandler = require('./middlewares/errHandler')

app.get('/', (req, res) => {
  res.status(200).json({ page: 'Home', message: 'Connected to SoundSky Apps!' })
})
app.use('/post', post)
app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port port`))