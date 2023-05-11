import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { AssessmentType } from 'src/data';

@Injectable()
export class ReadinessService {
  constructor(private prisma: PrismaService) {}

  clearReadinessData = async (req, res, next) => {
    if (!req.user) {
      await this.prisma.readiness.deleteMany();
    } else {
      await this.prisma.readiness.deleteMany({
        where: {
          id: req.user.id,
        },
      });
    }
    next();
  };

  async getAllReadiness() {
    return await this.prisma.readiness.findMany({
      include: {
        User: true,
        Recommendation: true,
        Score: true,
      },
    });
  }

  async getIdReadiness(id: number, type: string) {
    const assessmentType =
      type === 'people'
        ? AssessmentType.PEOPLE
        : type === 'process'
        ? AssessmentType.PROCESS
        : type === 'technology'
        ? AssessmentType.TECHNOLOGY
        : null; // return null if type is not valid

    if (!assessmentType) {
      // return an empty array if type is not valid
      return [];
    }

    return await this.prisma.readiness.findUnique({
      where: {
        id: +id,
      },
      include: {
        User: true,
        Recommendation: true,
        Score: true,
      },
    });
  }

  async createReadiness(data: {
    result: {
      number: number;
      indicator: string;
      level: string;
      score: number;
      type: string;
    }[];
    totalScore: number;
    avgScore: number;
    maturityLevel: string;
    role: string;
    numberOfInitial?: number;
    numberOfRepeatable?: number;
    numberOfDefined?: number;
    numberOfManaged?: number;
    numberOfOptimized?: number;
  }) {
    const {
      result,
      totalScore,
      avgScore,
      maturityLevel,
      role,
      numberOfInitial,
      numberOfRepeatable,
      numberOfDefined,
      numberOfManaged,
      numberOfOptimized,
    } = data;

    return await this.prisma.readiness.create({
      data: {
        result: JSON.stringify(result),
        totalScore,
        avgScore,
        maturityLevel,
        role,
        numberOfInitial,
        numberOfRepeatable,
        numberOfDefined,
        numberOfManaged,
        numberOfOptimized,
      },
    });
  }

  async removeAllReadiness() {
    return await this.prisma.readiness.deleteMany();
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
