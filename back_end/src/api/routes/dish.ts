import { RequestHandler, Router } from 'express'
import * as dishController from '../controllers/dish'
import { auth } from '../middleware/auth'

const dishRouter = Router()

dishRouter.post('/', [auth, dishController.create] as RequestHandler[])

dishRouter.get('/categorized-dishes/:resturant_id', [auth, dishController.getResturantCategorizedDishes] as RequestHandler[])

export default dishRouter