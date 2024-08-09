import { PrismaClient } from '@prisma/client';

class Like {
  private prisma

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async insert(postId: number, userId: number) {
    const like = await this.prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
    return like;
  }

  public async deleteLike(id: number) {
    await this.prisma.like.delete({ where: { id } });
  }

  public async findAll() {
    const likes = await this.prisma.like.findMany(
      { 
        include: { post: true, user: true }, 
        omit: { postId: true, userId: true }, 
    },
);
    return likes;
  }
}

export default Like;