import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(
    @InjectRepository(Employee)
    private readonly categoryRepository: Repository<Employee>,
  ) {
    super(categoryRepository);
  }
}
