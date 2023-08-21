import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { KeyResultsModule } from './key-results/key-results.module';
import { HealthModule } from './health/health.module';
import { CoreModule } from './core/core.module';
import dbconfig, { DATABASE_URL } from './config/database';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { UserDetailModule } from './user-detail/user-detail.module';
import { BatchModule } from './batch/batch.module';
import { FaqModule } from './faq/faq.module';
import { FaqCategoryModule } from './faq-category/faq-category.module';
import { FloorModule } from './floor/floor.module';
import { TableModule } from './table/table.module';
import { RecipeModule } from './recipe/recipe.module';
import { ItemStockModule } from './item-stock/item-stock.module';
import { ItemModule } from './item/item.module';
import { ItemBatchModule } from './item-batch/item-batch.module';
import { CustomerModule } from './customer/customer.module';
import { OrderProductModule } from './order-product/order-product.module';
import { FinancialRecordModule } from './financial-record/financial-record.module';
import { OrderModule } from './order/order.module';
import { RoleModule } from './role/role.module';
import { AuthorityModule } from './authority/authority.module';
import { KitchenActivityModule } from './kitchen-activity/kitchen-activity.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    HealthModule,
    CoreModule,
    TypeOrmModule.forRoot(dbconfig),
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DB_CONNECTION_POOL_MAX: Joi.string().required(),
        DATABASE_SCHEMA_SYNC: Joi.string().required(),
        TYPEORM_QUERY_LOGGING: Joi.string().required(),
        APP_PORT: Joi.string().required(),
        APP_ENV: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    UserModule,
    CategoryModule,
    UserDetailModule,
    BatchModule,
    FaqModule,
    FaqCategoryModule,
    FloorModule,
    TableModule,
    RecipeModule,
    ItemStockModule,
    ItemModule,
    ItemBatchModule,
    CustomerModule,
    OrderProductModule,
    FinancialRecordModule,
    OrderModule,
    RoleModule,
    AuthorityModule,
    KitchenActivityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}