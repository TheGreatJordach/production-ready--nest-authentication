import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../users/entity/user.entity";

export const getDatabaseConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => ({
  type: "postgres",
  host: configService.getOrThrow<string>("DATASOURCE_HOST"),
  port: configService.getOrThrow<number>("DATASOURCE_PORT"),
  database: configService.getOrThrow<string>("DATASOURCE_DATABASE"),
  username: configService.getOrThrow<string>("DATASOURCE_USERNAME"),
  password: configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
  entities: [User],
  // synchronize is Actually set to true for dev only
  synchronize: configService.getOrThrow<boolean>("DATASOURCE_SYNCHRONIZATION"),
  // migrations: [],
  // migrationsRun is Actually set to false for dev only
  migrationsRun: configService.getOrThrow("DATASOURCE_MIGRATION_RUN"),
  // logging: configService.getOrThrow<boolean>("DATASOURCE_LOGGING"),
  extra: {
    max: configService.getOrThrow<number>("DATASOURCE_MAX_CONNECTIONS"),
    connectionTimeoutMillis: configService.getOrThrow<number>(
      "DATASOURCE_CONNECTION_TIMEOUT"
    ),
    idleTimeoutMillis: configService.getOrThrow<number>(
      "DATASOURCE_IDLE_TIMEOUT"
    ),
    healthCheckTimeoutMillis: configService.getOrThrow<number>(
      "DATASOURCE_HEALTH_CHECK_TIMEOUT"
    ),
    //  logLevel: configService.getOrThrow<string>("LOG_LEVEL"),
  },
});
