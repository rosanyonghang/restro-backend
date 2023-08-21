import {
  Body,
  Controller,
  Query,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseFilters,
  Delete,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  KEY_RESULT_ASSIGNED_CHANGED,
  KEY_RESULT_CREATED,
  KEY_RESULT_DELETED,
  KEY_RESULT_FETCHED,
  KEY_RESULT_PRIORITY_CHANGED,
  KEY_RESULT_UPDATED,
  KEY_RESULTS_FETCHED,
  KEY_RESULT_EDITED,
} from '../responses/key-results.constants';
import { ResponseMessage } from '../../../core/decorators/response.decorator';
import { FetchKeyResultsQuery } from '../../queries/fetch-key-results.query';
import { FetchKeyResultsByIdQuery } from '../../queries/fetch-key-results-by-id.query';
import { CreateKeyResultCommand } from '../../commands/create-key-result.command';
import { DeleteKeyResultCommand } from '../../commands/delete-key-result.command';
import { UpdateKeyResultCommand } from '../../commands/update-key-result.command';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateKeyResults } from '../requests/create-key-results.request';
import {
  AssignKeyResultDto,
  ChangeKeyResultPriorityDto,
  UpdateKeyResultRequest,
} from '../requests/update-key-result.request';
import { AssignKeyResultCommand } from '../../commands/assign-key-result.command';
import { ChangeKeyResultPriorityCommand } from '../../commands/change-key-result-priority.command';
import { KeyResultNotFoundExceptionFilter } from '../exception-filters/key-result-not-found.exception-filter';
import { EditKeyResultCommand } from '../../commands/edit-key-result.command';
import { RemoveKeyResultCommand } from 'src/key-results/commands/remove-key-result.command';

@ApiTags('Key Results')
@Controller('key-result')
export class KeyResultsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  @ApiOkResponse({ description: KEY_RESULTS_FETCHED })
  @ResponseMessage(KEY_RESULTS_FETCHED)
  async getKeyResult() {
    return this.queryBus.execute(new FetchKeyResultsQuery());
  }

  @Get(':id')
  @UseFilters(KeyResultNotFoundExceptionFilter)
  @ApiOkResponse({ description: KEY_RESULT_FETCHED })
  @ResponseMessage(KEY_RESULT_FETCHED)
  async getKeyResultById(@Param('id') id: string) {
    return this.queryBus.execute(new FetchKeyResultsByIdQuery(id));
  }

  @Post()
  @ResponseMessage(KEY_RESULT_CREATED)
  async createKeyResult(
    @Req() req,
    @Query() query,
    @Body() body: { data: CreateKeyResults; user: string },
  ) {
    return this.commandBus.execute(
      new CreateKeyResultCommand(body.data, query.okr, body.user),
    );
  }

  @Put(':id')
  @ResponseMessage(KEY_RESULT_EDITED)
  async editKeyResult(@Param('id') id: string, @Query() query, @Body() body) {
    return await this.commandBus.execute(
      new EditKeyResultCommand(id, query.okr, body),
    );
  }

  @Delete(':id')
  @ResponseMessage(KEY_RESULT_DELETED)
  async removeKeyResult(@Param('id') id: string, @Query() query) {
    return await this.commandBus.execute(
      new RemoveKeyResultCommand(id, query.okr),
    );
  }

  @Put(':id')
  @ApiOkResponse({ description: KEY_RESULT_UPDATED })
  @ApiBody({
    isArray: false,
    description: 'Create Key Result API',
    type: UpdateKeyResultRequest,
  })
  @ResponseMessage(KEY_RESULT_UPDATED)
  async updateKeyResult(@Req() req, @Param('id') id: string, @Body() body) {
    const res = await this.queryBus.execute(new FetchKeyResultsByIdQuery(id));
    return this.commandBus.execute(
      new UpdateKeyResultCommand(id, body.data, body.user),
    );
  }

  @Put(':id/change-assign')
  @ApiOkResponse({ description: KEY_RESULT_ASSIGNED_CHANGED })
  @ResponseMessage(KEY_RESULT_ASSIGNED_CHANGED)
  @ApiBody({
    isArray: false,
    description: 'Create Key Result API',
    type: AssignKeyResultDto,
  })
  async assignKeyResult(@Req() req, @Param('id') id: string, @Body() body) {
    return await this.commandBus.execute(
      new AssignKeyResultCommand(id, body.assignTo, body.user),
    );
  }

  @Put(':id/change-priority')
  @ApiBody({
    isArray: false,
    description: 'Create Key Result API',
    type: ChangeKeyResultPriorityDto,
  })
  @ApiOkResponse({ description: KEY_RESULT_PRIORITY_CHANGED })
  @ResponseMessage(KEY_RESULT_PRIORITY_CHANGED)
  async changePriorityKeyResult(
    @Req() req,
    @Param('id') id: string,
    @Body() body,
  ) {
    return await this.commandBus.execute(
      new ChangeKeyResultPriorityCommand(id, body.priority, body.user),
    );
  }

  @Put(':id/delete')
  @ApiOkResponse({ description: KEY_RESULT_DELETED })
  @ResponseMessage(KEY_RESULT_DELETED)
  async deleteKeyResult(@Param('id') id: string, @Body() body: any) {
    return this.commandBus.execute(new DeleteKeyResultCommand(id, body.user));
  }
}
