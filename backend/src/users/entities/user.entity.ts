import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        unique: true
    })
    displayName: string;

    @Column({
        unique: true
    })
    email: string;

    //@Exclude()
    @Column()
    password: string;

}
