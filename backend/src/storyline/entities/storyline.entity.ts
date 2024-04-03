import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Storyline {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title: string;

    @Column()
    description: string;

    // ownerId: number;
    // asigneeIds: number [];
    // startNode: "/storynode/1";
    // storyNodeIds: number[];

}
