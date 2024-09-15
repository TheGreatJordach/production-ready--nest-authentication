import { Module } from "@nestjs/common";

import { ReadOnlyUserService } from "./read-only.user.service";
import { WriteUserService } from "./write.user.service";
import { ReadWriteUsersController } from "./read-write-users.controller";
import { UserSignInController } from "./user.sign-in.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ReadOnlyUserService, WriteUserService],
  controllers: [ReadWriteUsersController, UserSignInController],
})
export class UsersModule {}
