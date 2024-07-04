import { PrismaClient } from '@prisma/client';

class Profile {
  private prisma

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async insert() {
    const profile = await this.prisma.profile.create({
      data: {
        userId: 1,
        bio: 'Fico feliz de estar aqui',
      },
    });
    return profile;
  }

  public async findAll() {
    const profiles = await this.prisma.profile.findMany();
    return profiles;
  }
}

export default Profile;