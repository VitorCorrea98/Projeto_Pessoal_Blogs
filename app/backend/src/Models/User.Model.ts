import { PrismaClient } from '@prisma/client';

class User {
  private prisma

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async insert() {
    const user = await this.prisma.user.create({
      data: {
        name: 'Vitor',
        email: 'teste@teste.com',
      },
    });
    return user;
  }

  public async findAllLLL() {
    const users = await this.prisma.user.findMany(
      { 
      include: { posts: true, profile: true, likes: true, comments: true }, 
      },
);
    return users;
  }
}

export default User;