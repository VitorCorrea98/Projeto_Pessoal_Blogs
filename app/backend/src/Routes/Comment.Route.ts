import { Request, Response, Router } from 'express';
import CommentController from '../Controllers/Comment.Controller';

const commentRouter = Router();

const commentController = new CommentController();

commentRouter.get('/', (req: Request, res: Response) => commentController.findAll(req, res));
commentRouter.post('/', (req: Request, res: Response) => commentController.insert(req, res));

export default commentRouter;
