import { RequestHandler, Router } from 'express'
import * as dishCategoryController from '../controllers/dishCategory'
import { auth } from '../middleware/auth'

const dishCategoryRouter = Router()


dishCategoryRouter.post('/', [auth, dishCategoryController.createDishCategory] as RequestHandler[])

dishCategoryRouter.get('/:resturant_id', [auth, dishCategoryController.getDishCategoriesByResturantId] as RequestHandler[])


export default dishCategoryRouter