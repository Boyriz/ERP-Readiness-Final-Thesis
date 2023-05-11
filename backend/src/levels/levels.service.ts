import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LevelsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllLevels() {
    return await this.prisma.level.findMany({
      include: {
        Assessment: true,
      },
    });
  }

  async getIdLevels(id: number) {
    return await this.prisma.level.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createLevels(data: Prisma.LevelCreateManyInput) {
    return await this.prisma.level.createMany({
      data: data,
    });
  }

  async removeLevels(id: number) {
    return await this.prisma.level.delete({
      where: {
        id: id,
      },
    });
  }

  async LevelAssest(id: number, assessmentId: number) {
    return await this.prisma.level.update({
      where: {
        id: +id,
      },
      data: {
        Assessment: {
          connect: {
            id: +assessmentId,
          },
        },
      },
    });
  }
}
