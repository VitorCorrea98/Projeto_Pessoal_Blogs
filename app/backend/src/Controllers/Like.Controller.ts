import { Request, Response } from 'express';
import LikeService from '../Services/Like.Service';

class LikeController {
  private likeService

  constructor() {
    this.likeService = new LikeService();
  }

  public async findAll(_req: Request, res: Response) {
    const response = await this.likeService.findAll();
    return res.status(response.status).json(response.data);
  } 

  public async insert(req: Request, res: Response) {
    const { postId, userId } = req.body;
    const response = await this.likeService.insert(postId, userId);
    return res.status(response.status).json(response.data);
  }
}

export default LikeController;
