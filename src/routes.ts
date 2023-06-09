import express, { Router, Request, Response } from 'express'

const routes = Router()

import uploadConfig from './config/uploadConfig'
import multer from 'multer'
import postController from './controllers/postController'

const upload = multer(uploadConfig)

routes.post('/register', upload.single('image'), postController.RegisterPost)
routes.get('/get-all-posts', postController.getAllPosts)
routes.get('/get-post/:id', postController.selectedPost)
routes.put('/update-post/:id', upload.single('image'), postController.UpdatePost)
routes.put('/update-likes/:id', postController.updateLikes)
routes.put('/update-views/:id', postController.updateViews)
// routes.put('/update-post/:id', upload.array('image[]', 3), postController.UpdatePost)
routes.delete('/delete-post/:id', postController.deletePost)
routes.delete('/delete-all-posts', postController.deleteAll)

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ Message: ` App Running on Get` })
})

export default routes