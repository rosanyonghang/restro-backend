import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteKeyResultCommand } from '../delete-key-result.command';
import { InjectModel } from '@nestjs/mongoose';
import KeyResultSchema, { KeyResult } from '../../schema/key-results.schema';
import { Model } from 'mongoose';

@CommandHandler(DeleteKeyResultCommand)
export class DeleteKeyResultHandler
  implements ICommandHandler<DeleteKeyResultCommand>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultModel: Model<typeof KeyResultSchema>,
  ) {}
  async execute(command: DeleteKeyResultCommand): Promise<any> {
    return this.keyResultModel.findByIdAndUpdate(command.keyResultId, {
      deletedAt: new Date(),
      updatedBy: command.currentUser,
    });
  }
}
