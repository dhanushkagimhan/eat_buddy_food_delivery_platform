import { Router } from 'express'
import * as userController from '../controllers/user'

const userRouter = Router()

userRouter.post('/register', userController.register)

userRouter.post('/login', userController.login)

userRouter.post('/auth-refresh', userController.authRefreshToken)

export default userRouter