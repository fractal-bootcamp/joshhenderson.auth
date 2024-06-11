import { Response } from "express"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.post('/', (_req: Request, res: Response) => {
    res.send('Got a POST request')
})