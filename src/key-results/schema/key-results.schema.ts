import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { PriorityEnum } from '../../common/enums/priority.enum';

@Schema({ timestamps: true })
export class KeyResult {
  @Transform(({ value }) => value.toString())
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, default: false })
  deleted: boolean;

  @Prop({ required: true })
  startValue: number;

  @Prop({ required: true })
  currentValue: number;

  @Prop({ required: true })
  targetValue: number;

  @Prop({ required: false })
  assignedTo: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ default: PriorityEnum.MEDIUM, enum: PriorityEnum })
  priority: string;

  @Prop({ required: false })
  progress: string;

  @Prop({ required: true })
  isIncrement: boolean;

  @Prop({ required: false })
  unit: string;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop({ required: false })
  deletedAt: Date;
}

export const KeyResultsSchema = SchemaFactory.createForClass(KeyResult);
export default KeyResultsSchema;
