import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getDatabaseConfig } from "../configuration/database.config";
import { configValidator } from "../configuration/env.validation";

@Module({
  imports: [
    ConfigModule.forRoot({ validate: configValidator }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: getDatabaseConfig,
    }),
  ],
})
export class DatabaseModule {}
