import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { KeyResultNotFoundException } from '../../exceptions/key-result-not-found-exception';
import { IErrorBody } from '../../../core/http/response/types';
import { Response } from 'express';

@Catch(KeyResultNotFoundException)
export class KeyResultNotFoundExceptionFilter
  implements ExceptionFilter<KeyResultNotFoundException>
{
  catch(exception: KeyResultNotFoundException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      title: 'Could not find key result',
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      detail: exception.message,
    } as IErrorBody);
  }
}
