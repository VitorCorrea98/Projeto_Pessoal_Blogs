import { Request, Response } from 'express';
import CommentService from '../Services/Comment.Service';

class CommentController {
  private commentService

  constructor() {
    this.commentService = new CommentService();
  }

  public async findAll(_req: Request, res: Response) {
    const response = await this.commentService.findAll();
    return res.status(response.status).json(response.data);
  } 

  public async insert(_req: Request, res: Response) {
    const response = await this.commentService.insert();
    return res.status(response.status).json(response.data);
  }
}

export default CommentController;
