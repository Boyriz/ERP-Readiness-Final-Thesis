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
import { MaturityService } from './maturity.service';
import { Public } from 'src/common';
import { MaturityDTO } from './maturity.dto';
import { Response } from 'express';

@Controller('maturity')
export class MaturityController {
  constructor(private maturityService: MaturityService) {}

  @Public()
  @Get()
  getAllMaturity() {
    return this.maturityService.getAllMaturity();
  }

  @Public()
  @Get(':id')
  async getIdMaturity(@Param('id', ParseIntPipe) id: number) {
    const maturity = await this.maturityService.getIdMaturity(+id);
    if (!maturity) {
      throw new NotFoundException(`Maturity with id ${id} not found`);
    }
    return this.maturityService.getIdMaturity(+id);
  }

  @Public()
  @Post()
  async addMaturity(@Res() res: Response, @Body() data: MaturityDTO) {
    await this.maturityService.createMaturity(data);
    return res.status(200).send({
      message: 'Maturity Asigned',
      data: data,
    });
  }

  @Delete(':id')
  async removeMaturity(@Param('id') id: number) {
    const maturity = await this.maturityService.getIdMaturity(+id);
    if (!maturity) {
      throw new NotFoundException(`Maturity with id ${id} not found`);
    }
    return this.maturityService.removeMaturity(+id);
  }
}
