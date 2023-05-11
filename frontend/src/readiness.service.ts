import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReadinessService {
  constructor(private prisma: PrismaService) {}

  async getAllReadiness() {
    return this.prisma.readiness.findMany({
      include: {
        User: true,
        Recommendation: true,
        Score: true
      },
    });
  }

  async getIdReadiness(id: number) {
    return await this.prisma.readiness.findUnique({
      where: {
        id: +id,
      },
      include: {
        User: true,
        Recommendation: true,
        Score: true
      },
    });
  }

  async createReadiness(data: {
    result: { number: number; indicator: string; level: string }[];
    numberOfInitial: number;
    numberOfRepeatable: number;
    numberOfDefined: number;
    numberOfManaged: number;
    numberOfOptimized: number;
  }) {
    const { result, numberOfInitial, numberOfRepeatable, numberOfDefined, numberOfManaged, numberOfOptimized } = data;

    return await this.prisma.readiness.create({
      data: {
        result: JSON.stringify(result),
        numberOfInitial,
        numberOfRepeatable,
        numberOfDefined,
        numberOfManaged,
        numberOfOptimized,
      },
    });
  }

  async removeIdReadiness(id: number) {
    return await this.prisma.readiness.delete({
      where: {
        id: id,
      },
    });
  }

  async ReadinessScore(id: number, scoreId: number) {
    return await this.prisma.readiness.update({
      where: {
        id: +id,
      },
      data: {
        Score: {
          connect: {
            id: +scoreId,
          },
        },
      },
    });
  }

  async ReadinessRecommendation(id: number, recommendationId: number) {
    return await this.prisma.readiness.update({
      where: {
        id: +id,
      },
      data: {
        Recommendation: {
          connect: {
            id: +recommendationId,
          },
        },
      },
    });
  }
}
