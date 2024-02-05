
import express, { Request, Response } from 'express'
const app = express()


// parsers
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from our server!')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    console.log("Response from client")
    res.json({
        msg: "Successfully Received."
    })
  })

export default app