import User from '../Models/User.Model';

class UserService {
  private userModel

  constructor() {
    this.userModel = new User();
  }

  public async findAll() {
    const users = await this.userModel.findAllLLL();
    return { status: 200, data: users };
  }

  public async insert() {
    const user = await this.userModel.insert();
    return { status: 201, data: user };
  }
}

export default UserService;