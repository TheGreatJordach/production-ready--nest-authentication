import {
  AfterInsert,
  AfterLoad,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegistryDate } from "../embedded/registry.date";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fistName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  phone: string;

  @Column(() => RegistryDate, { prefix: false })
  registry: Date;

  @AfterLoad()
  loaded() {
    console.log(`Entity ${this}Loaded`);
  }

  @AfterInsert()
  afterInsert() {
    console.log(
      `User ${this.fistName} with ID : ${this.id} successfully Inserted `
    );
  }

  @AfterRemove()
  afterRemoved() {
    console.log(
      `User ${this.fistName} with ID : ${this.id} successfully Removed `
    );
  }

  @AfterUpdate()
  afterUpdate() {
    console.log(
      `User ${this.fistName} with ID : ${this.id} successfully Updated `
    );
  }
}
