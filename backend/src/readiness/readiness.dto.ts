import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ResultItem {
  @IsNumber()
  number: number;

  @IsString()
  indicator: string;

  @IsString()
  level: string;

  @IsNumber()
  score: number;

  @IsString()
  type: string;
}

export class ReadinessDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResultItem)
  result: ResultItem[];

  @IsNumber()
  totalScore: number;

  @IsNumber()
  avgScore: number;

  @IsString()
  maturityLevel: string;

  @IsString()
  role: string;

  @IsOptional()
  @IsNumber()
  numberOfInitial?: number;

  @IsOptional()
  @IsNumber()
  numberOfRepeatable?: number;

  @IsOptional()
  @IsNumber()
  numberOfDefined?: number;

  @IsOptional()
  @IsNumber()
  numberOfManaged?: number;

  @IsOptional()
  @IsNumber()
  numberOfOptimized?: number;
}


