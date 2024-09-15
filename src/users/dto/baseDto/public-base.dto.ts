export class GenericPublicBaseDto<T> {
  statusCode: number;
  message: string;
  data: T;

  constructor(
    statusCode: number = 200,
    message: string = "Success",
    data: T = null // Accept an instance of type T, not a class constructor
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
