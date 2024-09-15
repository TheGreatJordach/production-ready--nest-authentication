import { Module } from "@nestjs/common";

import { ReadOnlyUserService } from "./read/read-only.user.service";
import { WriteUserService } from "./write/write.user.service";
import { ReadUsersController } from "./read/read-users.controller";
import { UserAuthController } from "./user-auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ReadOnlyUserService, WriteUserService],
  controllers: [ReadUsersController, UserAuthController],
})
export class UsersModule {}
