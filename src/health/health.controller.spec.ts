import { Test, TestingModule } from "@nestjs/testing";
import { HealthController } from "./health.controller";
import {
  HealthCheckService,
  TypeOrmHealthIndicator,
  HttpHealthIndicator,
} from "@nestjs/terminus";
import { ConfigService } from "@nestjs/config";

describe("HealthController", () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthCheckService,
          useValue: { check: jest.fn().mockReturnValue({ status: "ok" }) }, // Mock HealthCheckService
        },
        {
          provide: TypeOrmHealthIndicator,
          useValue: { pingCheck: jest.fn() }, // Mock TypeOrmHealthIndicator
        },
        {
          provide: HttpHealthIndicator,
          useValue: { pingCheck: jest.fn() }, // Mock HttpHealthIndicator
        },
        {
          provide: ConfigService,
          useValue: {}, // Mock ConfigService
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
