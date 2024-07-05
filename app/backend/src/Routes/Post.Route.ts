import { Request, Response, Router } from 'express';
import PostController from '../Controllers/Post.Controller';

const postRouter = Router();

const postController = new PostController();

postRouter.get('/', (req: Request, res: Response) => postController.findAll(req, res));
postRouter.post('/', (req: Request, res: Response) => postController.insert(req, res));

export default postRouter;
