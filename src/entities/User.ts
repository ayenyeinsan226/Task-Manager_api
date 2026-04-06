import { Entity, PrimaryGeneratedColumn, Column, OneToMany, type Relation } from "typeorm";
import { Project } from "./Project.js";
import { Task } from "./Task.js";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: "member" })
  role!: "admin" | "member";

  @OneToMany(() => Project, (project) => project.owner)
  projects!: Relation<Project[]>;

  @OneToMany(() => Task, (task) => task.assignedUser)
  tasks!: Relation<Task[]>;
}