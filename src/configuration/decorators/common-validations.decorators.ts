import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsNotEmptyAndPositive(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isNotEmptyAndPositive",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: unknown) {
          // Use `args` to perform more complex validation if needed
          return typeof value === "number" && value > 0;
        },
        defaultMessage(args: ValidationArguments) {
          // Create a dynamic error message using `args`
          return `${args.property} must be a non-empty string. Provided value: "${args.value}"`;
        },
      },
    });
  };
}

export function IsNotEmptyString(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isNotEmptyString",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate(value: unknown) {
          // Use `args` to perform more complex validation if needed
          return typeof value === "string" && value.trim() !== "";
        },
        defaultMessage(args: ValidationArguments) {
          // Create a dynamic error message using `args`
          return `${args.property} must be a non-empty string. Provided value: "${args.value}"`;
        },
      },
    });
  };
}
