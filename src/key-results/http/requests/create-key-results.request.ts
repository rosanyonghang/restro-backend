import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateKeyResults {
  @IsString()
  @ApiProperty()
  krTitle: string;

  @IsString()
  @ApiProperty()
  startValue: number;

  @IsString()
  @ApiProperty()
  currentValue: number;

  @IsString()
  @ApiProperty()
  targetValue: number;

  @IsString()
  @ApiProperty()
  unit: string;

  @IsString()
  @ApiProperty()
  assignedTo: string;

  @IsString()
  @ApiProperty()
  isIncrement: boolean;
}

export class CreateKeyResultsRequest {
  @ApiProperty()
  data: CreateKeyResults;

  @IsString()
  @ApiProperty()
  user: string;
}
