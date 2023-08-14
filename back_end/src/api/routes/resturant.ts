import { Router } from 'express'
import * as resturantController from '../controllers/resturant'
import { auth } from '../middleware/auth'

const resturantRouter = Router()

resturantRouter.post('/', auth, resturantController.create)

resturantRouter.get('/:id', auth, resturantController.getResturant)

resturantRouter.patch('/:id', auth, resturantController.update)

resturantRouter.delete('/:id', auth, resturantController.deleteResturant)

resturantRouter.get('/', auth, resturantController.getAll)

// userRouter.post('/login', userController.login)

export default resturantRouter