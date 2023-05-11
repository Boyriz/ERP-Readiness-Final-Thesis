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
import { IndicatorsService } from './indicators.service';
import { IndicatorsDTO } from './indicators.dto';
import { Response } from 'express';
import { Public } from 'src/common';

@Controller('indicators')
export class IndicatorsController {
  constructor(private indicatorService: IndicatorsService) {}

  @Public()
  @Get()
  getAllIndicators() {
    return this.indicatorService.getAllIndicators();
  }

  @Get(':id')
  async getIdIndicators(@Param('id', ParseIntPipe) id: number) {
    const indicator = await this.indicatorService.getIdIndicators(+id);
    if (!indicator) {
      throw new NotFoundException('Indicator not found');
    }
    return this.indicatorService.getIdIndicators(+id);
  }

  @Public()
  @Post()
  async addIndicators(@Res() res: Response, @Body() data: IndicatorsDTO) {
    await this.indicatorService.createIndicators(data);
    return res.status(200).send({
      message: 'Indicator asigned',
      data: data,
    });
  }

  @Delete(':id')
  async removeIndicators(@Param('id') id: number) {
    const indicator = await this.indicatorService.getIdIndicators(+id);
    if (!indicator) {
      throw new NotFoundException('Indicator not found');
    }
    return await this.indicatorService.removeIndicators(+id);
  }

  @Patch('add/indicator-answer')
  async IndicatorOptions(@Body() body: { id: number; optionsId: number }) {
    return await this.indicatorService.IndicatorOptions(
      body.id,
      body.optionsId,
    );
  }
}
