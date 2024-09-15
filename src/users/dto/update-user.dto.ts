import { PartialType } from "@nestjs/mapped-types";
import { UserBaseDto } from "./user.base.dto";

export class UpdateUserDto extends PartialType(UserBaseDto) {}
