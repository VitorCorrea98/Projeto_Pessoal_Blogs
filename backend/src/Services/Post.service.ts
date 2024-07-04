import Post from '../Models/Post.Model';
import User from '../Models/User.Model';

class PostService {
  private postModel

  constructor() {
    this.postModel = new Post();
  }

  public async findAll() {
    const posts = await this.postModel.findAll();
    return { status: 200, data: posts };
  }

  public async insert() {
    const usersModel = new User();
    const users = await usersModel.findAllLLL();
    if (!users.some((user) => user.id === 1)) {
      return { 
        status: 400, 
        data: { message: 'User not found' }, 
      }; 
    }
    const post = await this.postModel.insert();
    return { status: 201, data: post };
  }
}

export default PostService;