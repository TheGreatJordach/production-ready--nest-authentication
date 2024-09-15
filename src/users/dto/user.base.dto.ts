import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { IsNotEmptyString } from "../../decorators/common-validations.decorators";

export class UserBaseDto {
  @IsNotEmptyString({
    message: `Please provide a valid string `,
  })
  readonly fistName: string;
  @IsNotEmptyString({
    message: `Please provide a valid string `,
  })
  readonly lastName: string;
  @IsEmail({}, { message: "Email must be a valid email address" })
  @IsNotEmpty({ message: "Email cannot be empty" })
  readonly email: string;

  @IsPhoneNumber("MA", {
    message: "Please provide a valid Morocco phone number (e.g., 0628965944)",
  })
  readonly phone: string;
}
