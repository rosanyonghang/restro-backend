import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AssignKeyResultCommand } from '../assign-key-result.command';
import { InjectModel } from '@nestjs/mongoose';
import KeyResultSchema, { KeyResult } from '../../schema/key-results.schema';
import { Model } from 'mongoose';

@CommandHandler(AssignKeyResultCommand)
export class AssignKeyResultHandler
  implements ICommandHandler<AssignKeyResultCommand>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultModel: Model<typeof KeyResultSchema>,
  ) {}
  async execute(command: AssignKeyResultCommand): Promise<any> {
    return this.keyResultModel.findByIdAndUpdate(command.keyResultId, {
      assignTo: command.assignTo,
      updatedBy: command.currentUser,
    });
  }
}
