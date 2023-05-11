import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MaturityService {
  constructor(private prisma: PrismaService) {}

  async getAllMaturity() {
    return this.prisma.maturity.findMany({
      include: {
        Recommendation: true,
      },
    });
  }

  async getIdMaturity(id: number) {
    return await this.prisma.maturity.findUnique({
      where: {
        id: +id,
      },
      include: {
        Recommendation: true,
      },
    });
  }

  async createMaturity(data: Prisma.MaturityCreateManyInput) {
    return await this.prisma.maturity.createMany({
      data: data,
    });
  }

  async removeMaturity(id: number) {
    return await this.prisma.maturity.delete({
      where: {
        id: id,
      },
    });
  }
}
