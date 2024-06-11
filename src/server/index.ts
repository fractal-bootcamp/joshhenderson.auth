import { Response } from "express"
import cors from "cors"



const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.post('/', (_req: Request, res: Response) => {
    res.send('Got a POST request')
})