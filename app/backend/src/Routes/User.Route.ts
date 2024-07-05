import { Request, Response, Router } from 'express';
import UserController from '../Controllers/User.Controller';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', (req: Request, res: Response) => userController.findAll(req, res));
userRouter.post('/', (req: Request, res: Response) => userController.insert(req, res));

export default userRouter;
