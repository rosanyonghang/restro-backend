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
import { CategoryModule } from './category/category.module';
import { UserDetailModule } from './user-detail/user-detail.module';
import { FaqModule } from './faq/faq.module';
import { FaqCategoryModule } from './faq-category/faq-category.module';
import { FloorModule } from './floor/floor.module';
import { TableModule } from './table/table.module';
import { RecipeModule } from './recipe/recipe.module';
import { ItemModule } from './item/item.module';
import { ItemBatchModule } from './item-batch/item-batch.module';
import { CustomerModule } from './customer/customer.module';
import { OrderProductModule } from './order-product/order-product.module';
import { FinancialRecordModule } from './financial-record/financial-record.module';
import { OrderModule } from './order/order.module';
import { RoleModule } from './role/role.module';
import { AuthorityModule } from './authority/authority.module';
import * as Joi from '@hapi/joi';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductModule } from './product/product.module';
import { ProductAssociationModule } from './product-association/product-association.module';
import { ProductVariantModule } from './product-variant/product-variant.module';
import { ProductAttributeModule } from './product-attribute/product-attribute.module';
import { ProductSpecificationModule } from './product-specification/product-specification.module';
import { OrganizationModule } from './organization/organization.module';
import { DefaultSettingModule } from './default-setting/default-setting.module';
import { DiscountModule } from './discount/discount.module';
import { FeaturedProductModule } from './featured-product/featured-product.module';
import { FactoryActivityModule } from './factory-activity/factory-activity.module';
import { OrderLogModule } from './order-log/order-log.module';
import { FileModule } from './file/file.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RecipeItemModule } from './recipe-item/recipe-item.module';
import { CouponModule } from './coupon/coupon.module';
import { CouponUsageModule } from './coupon-usage/coupon-usage.module';
import { FlashSaleModule } from './flash-sale/flash-sale.module';
import { CampaignModule } from './campaign/campaign.module';
import { LocationModule } from './location/location.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { StockTransferModule } from './stock-transfer/stock-transfer.module';
import { AccountModule } from './account/account.module';
import { EmployeeModule } from './employee/employee.module';

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
    AuthenticationModule,
    UserModule,
    CategoryModule,
    UserDetailModule,
    FaqModule,
    FaqCategoryModule,
    FloorModule,
    TableModule,
    RecipeModule,
    ItemModule,
    ItemBatchModule,
    CustomerModule,
    OrderModule,
    OrderProductModule,
    OrderLogModule,
    FinancialRecordModule,
    RoleModule,
    AuthorityModule,
    ProductModule,
    NotificationsModule,
    ProductAssociationModule,
    ProductVariantModule,
    ProductAttributeModule,
    ProductSpecificationModule,
    OrganizationModule,
    DefaultSettingModule,
    DiscountModule,
    FeaturedProductModule,
    FactoryActivityModule,
    FileModule,
    RecipeItemModule,
    CouponModule,
    CouponUsageModule,
    FlashSaleModule,
    CampaignModule,
    LocationModule,
    WarehouseModule,
    StockTransferModule,
    AccountModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
