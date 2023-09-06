import { Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('account')
@ApiBearerAuth()
export class AccountController extends BaseController<Account> {
  constructor(private readonly accountService: AccountService) {
    super(accountService);
  }
}
