import {
  IsNotEmptyAndPositive,
  IsNotEmptyString,
} from "./decorators/common-validations.decorators";
import { IsBoolean } from "class-validator";

export class EnvironmentValidationDto {
  /****** string ***************/

  @IsNotEmptyString({
    message: `Please provide a valid string `,
  })
  DATASOURCE_HOST: string;
  @IsNotEmptyString({
    message: `Please provide a valid string `,
  })
  DATASOURCE_USERNAME: string;
  @IsNotEmptyString({
    message: `Please provide a valid string `,
  })
  DATASOURCE_PASSWORD: string;
  @IsNotEmptyString({
    message: `Please provide a valid string `,
  })
  DATASOURCE_DATABASE: string;
  @IsNotEmptyString({
    message: `Please provide a valid string `,
  })
  LOG_LEVEL: string;

  /****** boolean ***************/

  @IsBoolean({ message: `Please provide a valid boolean ` })
  DATASOURCE_LOGGING: boolean;
  @IsBoolean({ message: `Please provide a valid boolean ` })
  DATASOURCE_SYNCHRONIZATION: boolean;
  @IsBoolean({ message: `Please provide a valid boolean ` })
  DATASOURCE_SSL: boolean;

  /****** number ***************/

  @IsNotEmptyAndPositive({ message: `Please provide a valid Positive Number ` })
  APP_PORT: number;
  @IsNotEmptyAndPositive({ message: `Please provide a valid Positive Number ` })
  DATASOURCE_PORT: number;
  @IsNotEmptyAndPositive({ message: `Please provide a valid Positive Number ` })
  DATASOURCE_CONNECTION_TIMEOUT: number;
  @IsNotEmptyAndPositive({ message: `Please provide a valid Positive Number ` })
  DATASOURCE_IDLE_TIMEOUT: number;
  @IsNotEmptyAndPositive({ message: `Please provide a valid Positive Number ` })
  DATASOURCE_HEALTH_CHECK_TIMEOUT: number;
  @IsNotEmptyAndPositive({ message: `Please provide a valid Positive Number ` })
  CACHE_TTL: number;
  @IsNotEmptyAndPositive({ message: `Please provide a valid Positive Number ` })
  CACHE_MAX: number;
}
