import { Router } from 'express'
import userRouter from './user'
import resturantRouter from './resturant'
import dishRouter from './dish'
import dishCategoryRouter from './dishCategory'

const router = Router()

router.use('/user', userRouter)
router.use('/resturant', resturantRouter)
router.use('/dish', dishRouter)
router.use('/dish-category', dishCategoryRouter)

export default router