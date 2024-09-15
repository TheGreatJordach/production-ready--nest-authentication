import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigurationModule } from "./configuration/configuration.module";
import { CacheModule } from "@nestjs/cache-manager";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./users/users.module";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [
    ConfigurationModule,
    CacheModule.registerAsync({
      imports: [ConfigurationModule],
      useFactory: async () => {
        const ttl: number = parseInt(process.env.CACHE_TTL) || 60 * 5;
        const max: number = parseInt(process.env.CACHE_MAX) || 100;

        console.log(
          `Configuration initialized for cache", ttl:${ttl} and max:${max}`
        ); // DEBUG

        if (isNaN(ttl) || ttl < 0) {
          throw new Error("CACHE_TTL must be a non-negative integer");
        }

        if (isNaN(max) || max < 0) {
          throw new Error("CACHE_MAX must be a non-negative integer");
        }

        return {
          isGlobal: true,
          ttl,
          max,
        };
      },
    }),
    DatabaseModule,
    UsersModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
