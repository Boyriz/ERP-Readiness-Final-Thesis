import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecommendationsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRecommendations() {
    return await this.prisma.recommendation.findMany({
      include: {
        Score: true,
        Maturity: true
      },
    });
  }

  async getIdRecommendations(id: number) {
    return await this.prisma.recommendation.findUnique({
      where: {
        id: +id,
      },
    });
  }

  async createRecommendations(data: Prisma.RecommendationCreateInput) {
    return await this.prisma.recommendation.create({
      data: data,
    });
  }

  async removeRecommendations(id: number) {
    return await this.prisma.recommendation.delete({
      where: {
        id: id,
      },
    });
  }

  async RecommendationMaturity(id: number, maturityId: number) {
    return await this.prisma.recommendation.update({
      where: {
        id: +id,
      },
      data: {
        Maturity: {
          connect: {
            id: +maturityId,
          },
        },
      },
    });
  }
}
