import { Request, Response } from 'express';
import ProfileService from '../Services/Profile.Service';

class ProfileController {
  private profileService

  constructor() {
    this.profileService = new ProfileService();
  }

  public async findAll(req: Request, res: Response) {
    const response = await this.profileService.findAll();
    return res.status(response.status).json(response.data);
  } 

  public async insert(req: Request, res: Response) {
    const response = await this.profileService.insert();
    return res.status(response.status).json(response.data);
  }
}
export default ProfileController;