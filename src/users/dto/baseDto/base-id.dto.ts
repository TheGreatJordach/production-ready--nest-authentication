import { IsNumber, IsPositive } from "class-validator";

export class IdDtoBase {
  @IsPositive()
  @IsNumber()
  readonly id: number;
}
