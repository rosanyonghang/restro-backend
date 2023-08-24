import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CoreEntity } from './entities/base.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenGuard } from 'src/authentication/http/token.guard';

export abstract class BaseController<T extends CoreEntity> {
  protected constructor(
    protected readonly repository: Repository<T>,
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<T> {
    return this.repository.findOne(id as any);
  }

  @Post()
  @UseGuards(TokenGuard)
  async create(@Body() entity: T, @Req() request): Promise<T> {
    const user = request.user as User; // This should contain the authenticated user's info from TokenGuard

    return this.repository.save({
      ...entity,
      createdBy: user.id,
      updatedBy: user.id,
    });
  }

  @Put(':id')
  @UseGuards(TokenGuard)
  async update(
    @Param('id') id: number,
    @Body() entity: T,
    @Req() request,
  ): Promise<T> {
    const user = request.user as User; // Assuming 'User' is the user type

    await this.repository.update(id, {
      ...entity,
      updatedBy: user.id,
    } as any);
    return this.repository.findOne(id as any);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.repository.delete(id);
  }


  private getUserIdFromToken(token: string): number {
    const decoded = this.jwtService.decode(token) as any;
    return decoded.userId; // Adjust according to your JWT structure
  }
}
