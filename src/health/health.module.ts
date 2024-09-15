import { Module } from "@nestjs/common";
import { TerminusModule, TypeOrmHealthIndicator } from "@nestjs/terminus";
import { HealthController } from "./health.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [TerminusModule, HttpModule],
  providers: [TypeOrmHealthIndicator],
  controllers: [HealthController],
})
export class HealthModule {}
