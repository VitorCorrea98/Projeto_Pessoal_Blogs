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
    console.log(user);
    return user;
  }

  public async findAllLLL() {
    const users = await this.prisma.user.findMany({ include: { posts: true, profile: true } });
    console.log(users[0].posts[0].updatedAt.getTime());
    return users;
  }
}

export default User;