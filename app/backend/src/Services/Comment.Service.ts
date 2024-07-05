import Post from '../Models/Post.Model';
import Comment from '../Models/Comment.Model';

class CommentService {
  private commentModel

  constructor() {
    this.commentModel = new Comment();
  }

  public async findAll() {
    const posts = await this.commentModel.findAll();
    return { status: 200, data: posts };
  }

  public async insert() {
    const postModel = new Post();
    const posts = await postModel.findAll();
    if (!posts.some((post) => post.id === 1)) {
      return { 
        status: 400, 
        data: { message: 'User not found' }, 
      }; 
    }
    const post = await this.commentModel.insert();
    return { status: 201, data: post };
  }
}

export default CommentService;