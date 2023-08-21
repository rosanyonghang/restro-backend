import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import KeyResultSchema, { KeyResult } from '../../schema/key-results.schema';
import { Model } from 'mongoose';
import { RemoveKeyResultCommand } from '../remove-key-result.command';

@CommandHandler(RemoveKeyResultCommand)
export class RemoveKeyResultHandler
  implements ICommandHandler<RemoveKeyResultCommand>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultModel: Model<typeof KeyResultSchema>,
  ) {}

  async execute(command: RemoveKeyResultCommand): Promise<any> {
    await this.keyResultModel.findByIdAndDelete(command.keyResultId);
    return '';
  }
}
