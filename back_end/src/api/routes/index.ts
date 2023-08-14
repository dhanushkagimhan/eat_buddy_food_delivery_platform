import { Router } from 'express'
import userRouter from './user'
import resturantRouter from './resturant'

const router = Router()

router.use('/user', userRouter)
router.use('/resturant', resturantRouter)

export default router