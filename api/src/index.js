/* ---Imports---- */
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { router } from './router'

/* ------Express initialization------ */

const app = express()

/* -----Middlewares----- */

app.use(cors())
app.use(express.json())

/* -----Routes----- */

router(app)

/* -----Listening----- */

const port = process.env.PORT ? process.env.PORT : 8080

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})
