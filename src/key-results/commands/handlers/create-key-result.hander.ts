import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateKeyResultCommand } from '../create-key-result.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import KeyResultSchema, { KeyResult } from '../../schema/key-results.schema';
import { Model } from 'mongoose';

@CommandHandler(CreateKeyResultCommand)
export class CreateKeyResultHandler
  implements ICommandHandler<CreateKeyResultCommand>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultModel: Model<typeof KeyResultSchema>,
  ) {}

  // async execute(command: CreateKeyResultCommand): Promise<any> {
  //   try {
  //     new this.keyResultModel({
  //       ...command.data,
  //       createdBy: command.currentUser,
  //     })
  //       .save()
  //       .then(async (res) => {
  //         try {
  //           await this.okrModel.findByIdAndUpdate(command.okr_id, {
  //             $push: {
  //               keyResults: [res._id],
  //             },
  //           });
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return '';
  //   } catch (e) {
  //     return new Error(e);
  //   }
  // }
  async execute(command: CreateKeyResultCommand): Promise<any> {
    try {
      const res = await new this.keyResultModel({
        ...command.data,
        createdBy: command.currentUser,
      }).save();
      try {
        console.log('something');
      } catch (err) {
        console.log(err);
      }
      return res;
    } catch (e) {
      return new Error(e);
    }
  }
}
