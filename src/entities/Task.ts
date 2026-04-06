import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, type Relation } from "typeorm";
import { Project } from "./Project.js";
import { User } from "./User.js";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ default: "todo" })
  status!: "todo" | "in_progress" | "done";

  @ManyToOne(() => Project, (project) => project.tasks)
  project!: Relation<Project>;

  @ManyToOne(() => User, (user) => user.tasks)
  assignedUser!: Relation<User>;
}