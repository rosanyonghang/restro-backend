import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateKeyResultDto {
  @IsString()
  @ApiProperty()
  krTitle: string;

  @IsNumber()
  @ApiProperty()
  startValue: number;

  @IsNumber()
  @ApiProperty()
  currentValue: number;

  @IsNumber()
  @ApiProperty()
  targetValue: number;

  @IsString()
  @ApiProperty()
  unit: string;

  @IsString()
  @ApiProperty()
  assignedTo: string;

  @IsBoolean()
  @ApiProperty()
  isIncrement: boolean;
}

export class UpdateKeyResultRequest {
  @ApiProperty()
  data: UpdateKeyResultDto;

  @IsString()
  @ApiProperty()
  user: string;
}

export class AssignKeyResultDto {
  @IsString()
  @ApiProperty()
  assignedTo: string;

  @IsString()
  @ApiProperty()
  user: string;
}

export class ChangeKeyResultPriorityDto {
  @IsString()
  @ApiProperty()
  priority: string;

  @IsString()
  @ApiProperty()
  user: string;
}

export class ChangeKeyResultStatusRequest {
  @IsString()
  @ApiProperty()
  status: string;

  @IsString()
  @ApiProperty()
  user: string;
}
