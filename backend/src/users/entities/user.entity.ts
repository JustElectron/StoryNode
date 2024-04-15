import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { Exclude } from 'class-transformer';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        unique: true
    })
    displayName: string

    @Column({
        unique: true
    })
    email: string

    @Exclude()
    @Column()
    passwordHash: string

}
