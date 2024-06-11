import { Request, Response } from "express"
import cors from "cors"



const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    if (req.headers.header1 === "token") {
        res.send('Hello World!')
    } else {
        res.send("nope!")
    }

})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.post('/', (_req: Request, res: Response) => {
    res.send('Got a POST request')
})