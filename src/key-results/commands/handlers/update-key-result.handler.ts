import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateKeyResultCommand } from '../update-key-result.command';
import { InjectModel } from '@nestjs/mongoose';
import KeyResultSchema, { KeyResult } from '../../schema/key-results.schema';
import { Model } from 'mongoose';

@CommandHandler(UpdateKeyResultCommand)
export class UpdateKeyResultHandler
  implements ICommandHandler<UpdateKeyResultCommand>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultModel: Model<typeof KeyResultSchema>,
  ) {}
  async execute(command: UpdateKeyResultCommand): Promise<any> {
    return this.keyResultModel.findByIdAndUpdate(command.keyResultId, {
      ...command.updateKeyResultDto,
      updatedBy: command.currentUser,
    });
  }
}
