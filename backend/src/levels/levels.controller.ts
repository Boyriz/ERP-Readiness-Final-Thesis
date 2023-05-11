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
import { LevelsService } from './levels.service';
import { LevelsDTO } from './levels.dto';
import { Response } from 'express';

@Controller('levels')
export class LevelsController {
  constructor(private readonly levelService: LevelsService) {}

  @Get()
  async getAllLevels() {
    return await this.levelService.getAllLevels();
  }

  @Get(':id')
  async getIdLevels(@Param('id', ParseIntPipe) id: number) {
    const level = await this.levelService.getIdLevels(+id);
    if (!level) {
      throw new NotFoundException(`Level with id ${id} not found`);
    }
    return this.levelService.getIdLevels(+id);
  }

  @Post(':id')
  async addLevels(@Res() res: Response, @Body() data: LevelsDTO) {
    await this.levelService.createLevels(data);
    return res.status(200).send({
      message: 'Level asigned',
      data: data,
    });
  }

  @Delete(':id')
  async removeLevels(@Param('id') id: number) {
    const level = await this.levelService.getIdLevels(+id);
    if (!level) {
      throw new NotFoundException(`Level with id ${id} not found`);
    }
    return await this.levelService.removeLevels(+id);
  }

  @Patch('add/level-assest')
  async LevelAssest(@Body() body: { id: number; assessmentId: number }) {
    return await this.levelService.LevelAssest(body.id, body.assessmentId);
  }
}
