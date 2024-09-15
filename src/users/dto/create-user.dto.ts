import { UserBaseDto } from "./user.base.dto";
import { IsStrongPassword } from "class-validator";

export class CreateUserDto extends UserBaseDto {
  @IsStrongPassword(
    {},
    {
      message:
        "Password must be strong (e.g., include uppercase, lowercase, numbers, and symbols)",
    }
  )
  readonly password: string;
}
