import Profile from '../Models/Profile.Model';

class ProfileService {
  private profileModel

  constructor() {
    this.profileModel = new Profile();
  }

  public async findAll() {
    const profiles = await this.profileModel.findAll();
    return { status: 200, data: profiles };
  }

  public async insert() {
    const profile = await this.profileModel.insert();
    return { status: 200, data: profile };
  }
}

export default ProfileService;