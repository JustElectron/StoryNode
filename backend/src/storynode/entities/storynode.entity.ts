import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Exclude } from "class-transformer";

export enum NodeTypes {
    TEXT_NODE = "textNode",
    ACTION_NODE = "actionNode",
}

@Entity()
export class StoryNode {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    text: string;

    @Column({
        type: "simple-enum",
        enum: NodeTypes
    })
    nodeType: string;

    @Column({
        type: "simple-array",
        nullable: true
    })
    nodeActions: string[];


    @Exclude()
    @Column({ type: "int", nullable: true, unique: false })
    prevNodeId: number;

    @OneToOne(
        () => StoryNode, (storynode) => storynode.nextNode,
        { nullable: true }
    )
    @JoinColumn({ name: "prevNodeId" })
    prevNode: StoryNode;

    @Exclude()
    @Column({ type: "int", nullable: true, unique: false })
    nextNodeId: number;

    @OneToOne(
        () => StoryNode, (storynode) => storynode.prevNode,
        { nullable: true, cascade: true }
    )
    @JoinColumn({ name: "nextNodeId" })
    nextNode: StoryNode;

}
