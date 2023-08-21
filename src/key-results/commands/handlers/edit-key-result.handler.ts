import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import KeyResultSchema, { KeyResult } from '../../schema/key-results.schema';
import { Model } from 'mongoose';
import { EditKeyResultCommand } from '../edit-key-result.command';

@CommandHandler(EditKeyResultCommand)
export class EditKeyResultHandler
  implements ICommandHandler<EditKeyResultCommand>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultModel: Model<typeof KeyResultSchema>,
  ) {}
  async execute(command: EditKeyResultCommand): Promise<any> {
    return this.keyResultModel.findOneAndUpdate(
      { _id: command.keyResultId },
      command.data,
    );
  }
}
