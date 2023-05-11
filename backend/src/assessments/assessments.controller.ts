import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { AssessmentsService } from './assessments.service';
import { AssessmentDTO } from './assessment.dto';
import { Response } from 'express';
import { Public } from 'src/common';

@Controller('assessments')
export class AssessmentsController {
  constructor(private assestService: AssessmentsService) {}

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllAssessments() {
      return this.assestService.getAllAssessments();
  }

  @Get(':id')
  async getIdAssessments(@Param('id', ParseIntPipe) id: number) {
    const assess = await this.assestService.getIdAssessments(+id);
    if (!assess) {
      throw new NotFoundException('Assessment Not Found');
    }
    return this.assestService.getIdAssessments(+id);
  }

  @Public()
  @Post(':id')
  async addAssest(@Res() res: Response, @Body() data: AssessmentDTO) {
    await this.assestService.createAssest({
      id: Number(data.id) || -1,
      userId: Number(data.userId) || -1,
      indicatorId: Number(data.indicatorId) || -1,
      scoreId: Number(data.scoreId) || -1
    });
    return res.status(200).send({
      message: 'Assessment asigned',
      data: data,
    });
  }

  @Delete(':id')
  async removeAssessments(@Param('id') id: number) {
    const assess = await this.assestService.getIdAssessments(+id);
    if (!assess) {
      throw new NotFoundException('Assessment Not Found');
    }
    return await this.assestService.removeAssessments(+id);
  }

  @Patch('add/assest-user')
  async AssestUser(@Body() body: { id: number; userId: number }) {
    return await this.assestService.AssestUser(body.id, body.userId);
  }

  @Patch('add/assest-indicator')
  async AssestIndicator(@Body() body: { id: number; indicatorId: number }) {
    return await this.assestService.AssestIndicator(body.id, body.indicatorId);
  }

  @Patch('add/assest-score')
  async AssestScore(@Body() body: { id: number; scoreId: number }) {
    return await this.assestService.AssestScore(body.id, body.scoreId);
  }
}
