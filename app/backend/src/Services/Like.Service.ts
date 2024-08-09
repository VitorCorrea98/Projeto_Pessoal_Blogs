import Like from '../Models/Like.Model';

class LikeService {
  private likeModel

  constructor() {
    this.likeModel = new Like();
  }

  public async findAll() {
    const likes = await this.likeModel.findAll();
    return { status: 200, data: likes };
  }

  public async insert(postId: number, userId: number) {
    const like = await this.likeModel.insert(postId, userId);
    return { status: 201, data: like };
  }
}

export default LikeService;