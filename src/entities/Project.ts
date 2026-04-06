import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, type Relation } from "typeorm";
import { User } from "./User.js";
import { Task } from "./Task.js";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => User, (user) => user.projects)
  owner!: Relation<User>;

  @OneToMany(() => Task, (task) => task.project)
  tasks!: Relation<Task[]>;
}