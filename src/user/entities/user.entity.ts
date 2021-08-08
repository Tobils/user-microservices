import { UserInterface } from "./user.interface";
import {Entity , BaseEntity, Unique, BeforeInsert, CreateDateColumn, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
@Unique(['username', 'email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    salt: string

    @Column()
    name: string

    @Column()
    email: string

    @CreateDateColumn()
    createdAt: Date
}