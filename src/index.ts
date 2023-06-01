import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ Message: ` App Running on Get` })
})

app.listen(PORT, () => {
  console.log(` App Running: ${PORT}`)
})

export default app


