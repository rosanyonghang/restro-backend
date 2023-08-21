import { CreateKeyResultsException } from '../../exceptions/create-key-results.exception';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { IErrorBody } from '../../../core/http/response/types';
import { Response } from 'express';

@Catch(CreateKeyResultsException)
export class CreateUserExceptionFilter
  implements ExceptionFilter<CreateKeyResultsException>
{
  catch(exception: CreateKeyResultsException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      title: 'Could not create key results',
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      detail: exception.message,
    } as IErrorBody);
  }
}
