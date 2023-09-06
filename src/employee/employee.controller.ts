import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('employee')
@ApiBearerAuth()
@ApiTags('Employee')
export class EmployeeController extends BaseController<Employee> {
  constructor(private readonly employeeService: EmployeeService) {
    super(employeeService);
  }
}
