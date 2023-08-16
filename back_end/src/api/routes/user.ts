import { RequestHandler, Router } from 'express'
import * as userController from '../controllers/user'
import { auth } from '../middleware/auth'

const userRouter = Router()

userRouter.post('/register', (userController.register as RequestHandler))

userRouter.post('/login', (userController.login as RequestHandler))

userRouter.post('/auth-refresh', (userController.authRefreshToken as RequestHandler))

userRouter.post('/me', [auth, userController.getUserByRefreshToken] as RequestHandler[])

export default userRouter