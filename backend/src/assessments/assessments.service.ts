import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssessmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllAssessments() {
    return await this.prisma.assessment.findMany({
      include: {
        User: true,
        Level: true,
        Indicator: true,
        Score: true,
      },
    });
  }

  async getIdAssessments(id: number) {
    return await this.prisma.assessment.findUnique({
      where: {
        id: +id,
      },
    });
  }

  async createAssest(data: Prisma.AssessmentCreateManyInput) {
    return await this.prisma.assessment.createMany({
      data: data,
    });
  }

  async removeAssessments(id: number) {
    return await this.prisma.assessment.delete({
      where: {
        id: id,
      },
    });
  }

  async AssestUser(id: number, userId: number) {
    return await this.prisma.assessment.update({
      where: {
        id: +id,
      },
      data: {
        User: {
          connect: {
            id: +userId,
          },
        },
      },
    });
  }

  async AssestIndicator(id: number, indicatorId: number) {
    return await this.prisma.assessment.update({
      where: {
        id: +id,
      },
      data: {
        Indicator: {
          connect: {
            id: +indicatorId,
          },
        },
      },
    });
  }

  async AssestScore(id: number, scoreId: number) {
    return await this.prisma.assessment.update({
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
}
