import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { BaseController } from '../base/base.controller';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';

@Controller('account')
@ApiBearerAuth()
@ApiTags('Account')
export class AccountController extends BaseController<Account> {
  constructor(private readonly accountService: AccountService) {
    super(accountService);
  }
}
