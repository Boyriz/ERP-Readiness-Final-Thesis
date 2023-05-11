import { Injectable } from '@nestjs/common';
import { Prisma, Score } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScoresService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllScores() {
    return await this.prisma.score.findMany({
      include: {
        Assessment: true,
        Recommendation: true,
      },
    });
  }

  async getIdScores(id: number) {
    return await this.prisma.score.findUnique({
      where: {
        id: +id,
      },
    });
  }

  async createScores(data: Prisma.ScoreCreateInput) {
    return await this.prisma.score.create({
      data: data,
    });
  }

  async calculateScores(data: Score) {
    if (!Array.isArray(data.score)) {
      throw new Error('score must be an array');
    }
  
    const sortedData = data.score.slice().sort((a, b) => a - b);
    const n = sortedData.length;
    const q1 = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
    const q2 = n % 2 === 0 ? (sortedData[Math.floor(n / 2)] + sortedData[Math.floor(n / 2) - 1]) / 2 : sortedData[Math.floor(n / 2)];
    const q3 = n % 2 === 0 ? (sortedData[Math.floor(n / 2) + Math.floor(n / 2) % 2] + sortedData[Math.floor(n / 2) + Math.floor(n / 2) % 2 - 1]) / 2 : sortedData[Math.floor(n / 2) + Math.floor(n / 2) % 2];
    const total = (q1 + q2 + q3)/4
    return total;
  }

  async removeScores(id: number) {
    return await this.prisma.score.delete({
      where: {
        id: id,
      },
    });
  }

  async ScoreRecommendations(id: number, recommendationId: number) {
    return await this.prisma.score.update({
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
