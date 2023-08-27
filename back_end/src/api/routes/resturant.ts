import { RequestHandler, Router } from 'express'
import * as resturantController from '../controllers/resturant'
import { auth } from '../middleware/auth'

const resturantRouter = Router()

resturantRouter.post('/', [auth, resturantController.create] as RequestHandler[])

resturantRouter.get('/:id', [auth, resturantController.getResturant] as RequestHandler[])

resturantRouter.patch('/:id', [auth, resturantController.update] as RequestHandler[])

resturantRouter.delete('/:id', [auth, resturantController.deleteResturant] as RequestHandler[])

resturantRouter.get('/', [auth, resturantController.getAll] as RequestHandler[])

export default resturantRouter