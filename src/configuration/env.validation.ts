import { EnvironmentValidationDto } from "./env.validation.dto";
import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

export class EnvValidation extends EnvironmentValidationDto {}

export function configValidator(config: Record<string, any>): any {
  const validatedConfig = plainToInstance(EnvValidation, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  // Check for errors
  if (errors.length > 0) {
    throw new Error(
      ` ⚡ ${errors.length} validation failed 👀 | details: ${errors.toString()}`
    );
  }
  // DEBUG
  console.log("************************************************************");
  console.log(" 💪 All the database env successfully loaded");
  console.log("************************************************************");
  return validatedConfig;
}
