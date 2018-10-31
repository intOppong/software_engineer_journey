
const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const routes = require('./routes');
const keys = require('./config/keys');

const app = express()
const router = express.Router()

/** configure cloudinary */
cloudinary.config({
  cloud_name: 'gh-crimes',
  api_key: '782698664321276',
  api_secret: 'UhBzqfEUdP1qyKqy6nBwd4E0DEk'
})

/** connect to MongoDB datastore */
try {
  mongoose.connect(keys.db_url, {
    //useMongoClient: true
    useNewUrlParser: true
  })
} catch (error) {
  console.log('Failed to connect to Database');
}

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static', express.static(path.join(__dirname,'static')))

app.use('/api', router)

/** start server */
let port = 5000 || process.env.PORT
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
