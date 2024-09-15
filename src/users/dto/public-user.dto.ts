export class PublicUserDto {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;

  constructor(partial: Partial<PublicUserDto>) {
    this.firstname = partial.firstname;
    this.lastname = partial.lastname;
    this.phone = partial.phone;
    this.email = partial.email;
  }
}
