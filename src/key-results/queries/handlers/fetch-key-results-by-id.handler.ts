import { Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FetchKeyResultsByIdQuery } from '../fetch-key-results-by-id.query';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import KeyResultsSchema, { KeyResult } from '../../schema/key-results.schema';
import { KeyResultNotFoundException } from '../../exceptions/key-result-not-found-exception';

@Injectable()
@QueryHandler(FetchKeyResultsByIdQuery)
export class FetchKeyResultsByIdHandler
  implements IQueryHandler<FetchKeyResultsByIdQuery>
{
  constructor(
    @InjectModel(KeyResult.name)
    private keyResultsModel: Model<typeof KeyResultsSchema>,
  ) {}

  async execute(query: FetchKeyResultsByIdQuery): Promise<any> {
    return this.keyResultsModel.findOne(
      {
        _id: query.keyResultsId,
      },
      (error, result) => {
        if (error) {
          throw new KeyResultNotFoundException();
        } else {
          return result;
        }
      },
    );
  }
}
