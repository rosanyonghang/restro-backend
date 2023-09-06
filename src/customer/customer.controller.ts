import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('customer')
@ApiBearerAuth()
@ApiTags('Customer')
export class CustomerController extends BaseController<Customer> {
  constructor(private readonly customerService: CustomerService) {
    super(customerService);
  }
}
