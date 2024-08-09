import { Request, Response, Router } from 'express';
import LikeController from '../Controllers/Like.Controller';

const likeRouter = Router();

const likeController = new LikeController();

likeRouter.get('/', (req: Request, res: Response) => likeController.findAll(req, res));
likeRouter.post('/', (req: Request, res: Response) => likeController.insert(req, res));

export default likeRouter;
