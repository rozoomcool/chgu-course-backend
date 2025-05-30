import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from 'generated/prisma';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async findOne(userId: number): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

//   async update(userId: number, updateProfileDto: UpdateProfileDto): Promise<Profile> {
//     return this.prisma.profile.update({
//       where: { userId },
//       data: updateProfileDto,
//     });
//   }

  async updateAvatar(userId: number, avatarUrl: string): Promise<Profile> {
    return this.prisma.profile.update({
      where: { userId },
      data: { avatarUrl },
    });
  }
} 