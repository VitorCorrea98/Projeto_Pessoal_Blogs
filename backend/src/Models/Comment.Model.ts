import { PrismaClient } from '@prisma/client';

class Comment {
  private prisma

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async insert() {
    const comment = await this.prisma.comment.create({
      data: {
        comment: 'Esse post é lindo',
        postId: 1,
      },
    });
    return comment;
  }

  public async findAll() {
    const comments = await this.prisma.comment.findMany({ include: { post: true } });
    return comments;
  }
}

export default Comment;