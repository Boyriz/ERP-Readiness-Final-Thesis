import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: 'at-secret' });
      req.user = payload;
      next();
    } catch (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
  }
}
