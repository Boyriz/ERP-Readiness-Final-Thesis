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
import { OptionsService } from './options.service';
import { Response } from 'express';
import { OptionsDTO } from './options.dto';
import { Public } from 'src/common';

@Controller('options')
export class OptionsController {
  constructor(private optionService: OptionsService) {}

  @Public()
  @Get()
  getAllOptions() {
    return this.optionService.getAllOptions();
  }

  @Public()
  @Get(':id')
  async getIdOptions(@Param('id', ParseIntPipe) id: number) {
    const option = await this.optionService.getIdOptions(+id);
    if (!option) {
      throw new NotFoundException(`No options with id ${id} found`);
    }
    return this.optionService.getIdOptions(+id);
  }

  @Public()
  @Post(':id')
  async addOptions(@Res() res: Response, @Body() data: OptionsDTO) {
    await this.optionService.createOptions(data);
    return res.status(200).send({
      message: 'Answer asigned',
      data: data,
    });
  }

  @Public()
  @Delete(':id')
  async removeOptions(@Param('id') id: number) {
    const option = await this.optionService.getIdOptions(+id);
    if (!option) {
      throw new NotFoundException(`No options with id ${id} found`);
    }
    return await this.optionService.removeOptions(+id);
  }
}
