import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GenericPublicBaseDto } from "../dto/baseDto/public-base.dto";

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, GenericPublicBaseDto<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>
  ): Observable<GenericPublicBaseDto<T>> {
    return next
      .handle()
      .pipe(map((data) => new GenericPublicBaseDto(200, "Success", data)));
  }
}
