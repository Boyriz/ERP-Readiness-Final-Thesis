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
} from '@nestjs/common';
import { ScoresService } from './scores.service';
import { Response } from 'express';
import { ScoresDTO } from './scores.dto';
import { Public } from 'src/common';
import { Score } from '@prisma/client';

@Controller('scores')
export class ScoresController {
  constructor(private scoreService: ScoresService) {}

  @Public()
  @Get()
  getAllScores() {
    return this.scoreService.getAllScores();
  }

  @Get(':id')
  async getIdScores(@Param('id', ParseIntPipe) id: number) {
    const score = await this.scoreService.getIdScores(+id);
    if (!score) {
      throw new NotFoundException(`Score with id ${id} not found`);
    }
    return this.scoreService.getIdScores(+id);
  }

  @Public()
  @Post("calculate/:id")
  async calculateScores(@Res() res: Response, @Body() data: Score) {
    const score = await this.scoreService.calculateScores(data);
    if(!score) {
      throw new NotFoundException(`Score with id ${data.id} not found`);
    }
    return res.status(200).send({
      message: 'Score asigned',
      data: data,
    });
  }

  @Public()
  @Post()
  async addScores(@Res() res: Response, @Body() data: ScoresDTO) {
    await this.scoreService.createScores({
      score: Number(data.score) || -1,
      average_score: Number(data.average_score) || -1,
      maturity_level: data.maturity_level
    });
    return res.status(200).send({
      message: 'Score asignned',
      data: data,
    });
  }

  @Delete(':id')
  async removeScores(@Param('id') id: number) {
    const score = await this.scoreService.getIdScores(+id);
    if (!score) {
      throw new NotFoundException(`Score with id ${id} not found`);
    }
    return await this.scoreService.removeScores(+id);
  }

  @Patch('add/score-recommend')
  async ScoreRecommendations(
    @Body() body: { id: number; recommendationId: number },
  ) {
    return await this.scoreService.ScoreRecommendations(
      body.id,
      body.recommendationId,
    );
  }
}
