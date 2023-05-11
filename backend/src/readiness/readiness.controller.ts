import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ReadinessService } from './readiness.service';
import { Response } from 'express';
import { ReadinessDTO } from './readiness.dto';
import { Public } from 'src/common';
import { data, AssessmentType } from 'src/data';

@Controller('readiness')
export class ReadinessController {
  constructor(private readinessService: ReadinessService) {}

  @Public()
  @Get()
  async getAllReadiness() {
    return await this.readinessService.getAllReadiness();
  }

  @Public()
  @Get(':type/:id')
  async getIdReadiness(
    @Param('id', ParseIntPipe) id: number,
    @Param('type') type: AssessmentType,
  ) {
    const readiness = await this.readinessService.getIdReadiness(+id, type);
    if (!readiness) {
      throw new NotFoundException(
        `Readiness with id ${id} and type ${type} not found`,
      );
    }
    return readiness;
  }

  @Public()
  @Post()
  async addReadiness(@Res() res: Response, @Body() data: ReadinessDTO) {
    try {
      await this.readinessService.createReadiness({
        result: data.result,
        totalScore: data.totalScore,
        avgScore: data.avgScore,
        maturityLevel: data.maturityLevel,
        role: data.role,
        numberOfInitial: data.numberOfInitial,
        numberOfRepeatable: data.numberOfRepeatable,
        numberOfDefined: data.numberOfDefined,
        numberOfManaged: data.numberOfManaged,
        numberOfOptimized: data.numberOfOptimized,
      });
      return res.status(200).send({
        message: 'Readiness Assigned',
        data: data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal server error' });
    }
  }

  @Public()
  @Delete('clear-all')
  async clearAllReadiness() {
    return await this.readinessService.removeAllReadiness();
  }

  @Patch('add/readiness-score')
  async ReadinessScore(@Body() body: { id: number; scoreId: number }) {
    return await this.readinessService.ReadinessScore(body.id, body.scoreId);
  }

  @Public()
  @Patch('add/readiness-recommendation')
  async ReadinessRecommendation(
    @Body() body: { id: number; recommendationId: number },
  ) {
    return await this.readinessService.ReadinessRecommendation(
      body.id,
      body.recommendationId,
    );
  }
}
