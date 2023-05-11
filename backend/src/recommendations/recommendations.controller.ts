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
import { RecommendationsService } from './recommendations.service';
import { RecommendDTO } from './recommendations.dto';
import { Response } from 'express';
import { Public } from 'src/common';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private recommendService: RecommendationsService) {}

  @Public()
  @Get()
  getAllRecommendations() {
    return this.recommendService.getAllRecommendations();
  }

  @Get(':id')
  async getIdRecommendations(@Param('id', ParseIntPipe) id: number) {
    const recommend = await this.recommendService.getIdRecommendations(+id);
    if (!recommend) {
      throw new NotFoundException(`Recommendation with id ${id} not found`);
    }
    return this.recommendService.getIdRecommendations(+id);
  }

  @Public()
  @Post()
  async addRecommendations(@Res() res: Response, @Body() data: RecommendDTO) {
    await this.recommendService.createRecommendations(data);
    return res.status(200).send({
      message: 'Recommendation asigned',
      data: data,
    });
  }

  @Delete(':id')
  async removeRecommendations(@Param('id') id: number) {
    const recommend = await this.recommendService.getIdRecommendations(+id);
    if (!recommend) {
      throw new NotFoundException(`Recommendation with id ${id} not found`);
    }
    return await this.removeRecommendations(+id);
  }

  @Patch('add/recommendation-maturity')
  async RecommendationMaturity(
    @Body() body: { id: number; maturityId: number },
  ) {
    return await this.recommendService.RecommendationMaturity(
      body.id,
      body.maturityId,
    );
  }
}
