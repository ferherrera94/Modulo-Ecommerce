const mongoose = require('mongoose')
import { mongo_host } from './config'

const URI = mongo_host

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB is connected'))
.catch(err => console.log(`Error: ${err}`))