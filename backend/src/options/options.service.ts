import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OptionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOptions() {
    return await this.prisma.answers.findMany({
      include: {
        Indicator: true,
      },
    });
  }

  async getIdOptions(id: number) {
    return await this.prisma.answers.findUnique({
      where: {
        id: +id,
      },
    });
  }

  async createOptions(data: Prisma.AnswersCreateManyInput) {
    return await this.prisma.answers.create({
      data: data,
    });
  }

  async removeOptions(id: number) {
    return await this.prisma.answers.delete({
      where: {
        id: id,
      },
    });
  }
}
