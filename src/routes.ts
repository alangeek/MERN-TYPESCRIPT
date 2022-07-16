import { Router } from 'express'
import userController from './controller/user.controller'

const routes = Router()

routes.post('/user', userController.create)

export default routes
