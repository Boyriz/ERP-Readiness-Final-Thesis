import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // async getMyUser(id: number, req: Request) {
  //   const decodedUserInfo = req.user as {
  //     id: number;
  //     firstname: string;
  //     lastname: string;
  //     email: string;
  //   };
  
  //   const foundUser = await this.prisma.user.findUnique({
  //     where: {
  //       id: id,
  //     },
  //   });
  
  //   console.log(foundUser);

  //   if (!foundUser) {
  //     throw new NotFoundException();
  //   }
  
  //   if (foundUser.id !== decodedUserInfo.id) {
  //     throw new ForbiddenException();
  //   }
  
  //   delete foundUser.hash;
  
  //   return { user: foundUser };
  // }

  async getMyUser(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: +id,
      },
      include: {
        Readiness: true
      }
    })
  }
  
  

  async getUsers() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
      },
    });

    return { users };
  }

  async UserReadiness(id: number, readinessId: number) {
    return await this.prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        Readiness: {
          connect: {
            id: +readinessId,
          },
        },
      },
    });
  }
}
