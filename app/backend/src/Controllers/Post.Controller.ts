import { Request, Response } from 'express';
import PostService from '../Services/Post.service';

class PostController {
  private postService

  constructor() {
    this.postService = new PostService();
  }

  public async findAll(_req: Request, res: Response) {
    const response = await this.postService.findAll();
    return res.status(response.status).json(response.data);
  } 

  public async insert(_req: Request, res: Response) {
    const response = await this.postService.insert();
    return res.status(response.status).json(response.data);
  }
}

export default PostController;
