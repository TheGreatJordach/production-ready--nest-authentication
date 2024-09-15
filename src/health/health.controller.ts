import { Controller, Get } from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from "@nestjs/terminus";
import { ConfigService } from "@nestjs/config";

@Controller("health")
export class HealthController {
  constructor(
    private readonly healthCheck: HealthCheckService,
    private readonly db: TypeOrmHealthIndicator,
    private readonly configService: ConfigService,
    private readonly http: HttpHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    const timeout = this.configService.get<number>(
      "DATASOURCE_HEALTH_CHECK_TIMEOUT"
    );
    return this.healthCheck.check([
      async () => this.db.pingCheck("database", { timeout }),
    ]);
  }

  @Get("http")
  @HealthCheck()
  httpCheck() {
    return this.healthCheck.check([
      async () => this.http.pingCheck("nestApp", "http://localhost:3000"),
    ]);
  }
}
