import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Authority } from './entities/authority.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorityService extends BaseService<Authority> {
  constructor(
    @InjectRepository(Authority)
    private readonly authorityRepository: Repository<Authority>,
  ) {
    super(authorityRepository);
  }
}
