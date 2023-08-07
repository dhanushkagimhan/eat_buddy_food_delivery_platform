import { Router, Request, Response } from 'express'
import * as userController from '../controllers/user'
import { UserInput, UserOutput, GetAllUsersFilters } from '../../common/interfaces'

const userRouter = Router()

userRouter.post('/', async (req: Request, res: Response) => {
    // create user
    const payload: UserInput = req.body;
    const result: UserOutput = await userController.create(payload)
    return res.status(200).send(result)
})

userRouter.get('/', async (req: Request, res: Response) => {
    // get users
    const filters: GetAllUsersFilters = req.query
    const results = await userController.getAll(filters)
    return res.status(200).send(results)
})
// ingredientsRouter.put('/:id', () => {
//   // update ingredient
// })
// ingredientsRouter.delete('/:id', () => {
//   // delete ingredient
// })



export default userRouter