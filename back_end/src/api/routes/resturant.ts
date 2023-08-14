import { Router } from 'express'
import * as resturantController from '../controllers/resturant'

const resturantRouter = Router()

resturantRouter.post('/', resturantController.create)

resturantRouter.get('/:id', resturantController.getResturant)

resturantRouter.patch('/:id', resturantController.update)

resturantRouter.delete('/:id', resturantController.deleteResturant)

resturantRouter.get('/', resturantController.getAll)

// userRouter.post('/login', userController.login)

export default resturantRouter