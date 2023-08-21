import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ChangeKeyResultPriorityCommand } from '../change-key-result-priority.command';
import { InjectModel } from '@nestjs/mongoose';
import KeyResultSchema, { KeyResult } from '../../schema/key-results.schema';
import { Model } from 'mongoose';

@CommandHandler(ChangeKeyResultPriorityCommand)
export class ChangeKeyResultPriorityHandler
  implements ICommandHandler<ChangeKeyResultPriorityCommand>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultModel: Model<typeof KeyResultSchema>,
  ) {}
  async execute(command: ChangeKeyResultPriorityCommand): Promise<any> {
    return this.keyResultModel.findByIdAndUpdate(command.keyResultId, {
      assignTo: command.priority,
      updatedBy: command.currentUser,
    });
  }
}
