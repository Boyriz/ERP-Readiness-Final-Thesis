import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IndicatorsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllIndicators() {
    return await this.prisma.indicator.findMany({
      include: {
        Answers: true,
      },
    });
  }

  async getIdIndicators(id: number) {
    return await this.prisma.indicator.findUnique({
      where: {
        id: +id,
      },
    });
  }

  async createIndicators(data: Prisma.IndicatorCreateInput) {
    return await this.prisma.indicator.create({
      data,
    });
  }

  async removeIndicators(id: number) {
    return await this.prisma.indicator.delete({
      where: {
        id: id,
      },
    });
  }

  async IndicatorOptions(id: number, optionsId: number) {
    return await this.prisma.indicator.update({
      where: {
        id: +id,
      },
      data: {
        Answers: {
          connect: {
            id: +optionsId,
          },
        },
      },
    });
  }
}
