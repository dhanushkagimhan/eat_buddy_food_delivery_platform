import { Router } from 'express'
import userRouter from './user'
import resturantRouter from './resturant'
import dishRouter from './dish'

const router = Router()

router.use('/user', userRouter)
router.use('/resturant', resturantRouter)
router.use('/dish', dishRouter)

export default router