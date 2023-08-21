import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import KeyResultsSchema, { KeyResult } from './schema/key-results.schema';
import { KeyResultsController } from './http/controllers/key-results.controller';
import { FetchKeyResultsByIdHandler } from './queries/handlers/fetch-key-results-by-id.handler';
import { CreateKeyResultHandler } from './commands/handlers/create-key-result.hander';
import { DeleteKeyResultHandler } from './commands/handlers/delete-key-result.handler';
import { UpdateKeyResultHandler } from './commands/handlers/update-key-result.handler';
import { EditKeyResultHandler } from './commands/handlers/edit-key-result.handler';
import { RemoveKeyResultHandler } from './commands/handlers/remove-key-result.handler';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: KeyResult.name, schema: KeyResultsSchema },
    ]),
  ],
  controllers: [KeyResultsController],
  providers: [
    FetchKeyResultsByIdHandler,
    CreateKeyResultHandler,
    DeleteKeyResultHandler,
    EditKeyResultHandler,
    UpdateKeyResultHandler,
    RemoveKeyResultHandler,
  ],
})
export class KeyResultsModule {}
