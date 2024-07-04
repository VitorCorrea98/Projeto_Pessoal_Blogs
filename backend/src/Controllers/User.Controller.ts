import { Request, Response } from 'express';
import UserService from '../Services/User.Service';

class UserController {
  private userService

  constructor() {
    this.userService = new UserService();
  }

  public async findAll(_req: Request, res: Response) {
    const response = await this.userService.findAll();
    return res.status(response.status).json(response.data);
  } 

  public async insert(_req: Request, res: Response) {
    const response = await this.userService.insert();
    return res.status(response.status).json(response.data);
  }
}

export default UserController;
