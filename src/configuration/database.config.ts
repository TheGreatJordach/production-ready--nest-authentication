import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const getDatabaseConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => ({
  type: "postgres",
  host: configService.getOrThrow<string>("DATASOURCE_HOST"),
  port: configService.getOrThrow<number>("DATASOURCE_PORT"),
  database: configService.getOrThrow<string>("DATASOURCE_DATABASE"),
  username: configService.getOrThrow<string>("DATASOURCE_USERNAME"),
  password: configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
  entities: [],
  synchronize: configService.getOrThrow<boolean>("DATASOURCE_SYNCHRONIZATION"),
  migrations: [],
  migrationsRun: configService.getOrThrow("DATASOURCE_MIGRATION_RUN"),
  logging: configService.getOrThrow<boolean>("DATASOURCE_LOGGING"),
  extra: {
    max: configService.getOrThrow<number>("DATASOURCE_MAX_CONNECTIONS"),
    connectionTimeoutMillis: configService.getOrThrow<number>(
      "DATASOURCE_CONNECTION_TIMEOUT"
    ),
    idleTimeoutMillis: configService.getOrThrow<number>(
      "DATASOURCE_IDLE_TIMEOUT"
    ),
  },
});
