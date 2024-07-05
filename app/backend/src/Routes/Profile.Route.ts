import { Router, Request, Response } from 'express';
import ProfileController from '../Controllers/Profile.Controller';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get('/', (req: Request, res: Response) => profileController.findAll(req, res));
profileRouter.post('/', (req: Request, res: Response) => profileController.insert(req, res));

export default profileRouter;