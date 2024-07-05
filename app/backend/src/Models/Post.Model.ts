import { PrismaClient } from '@prisma/client';

class Post {
  private prisma

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async insert() {
    const post = await this.prisma.post.create({
      data: {
        title: 'Project Blogs',
        authorId: 1,
        content: 'Aqui esta sendo feito o teste do prisma',
      },
    });
    return post;
  }

  public async findAll() {
    const posts = await this.prisma.post.findMany(
      { 
        include: { author: true, comments: true },
        omit: {
          authorId: true,
        },
      },
);
    return posts;
  }
}

export default Post;