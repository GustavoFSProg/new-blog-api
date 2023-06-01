import express, { Router, Request, Response } from 'express'

const routes = Router()



routes.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ Message: ` App Running on Get` })
})

export default routes