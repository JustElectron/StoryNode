import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Exclude, Expose } from "class-transformer";

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


    @Column({ type: "int", nullable: true })
    @Exclude()
    prevNodeId: number;

    @OneToOne(
        (type) => StoryNode, (storynode) => storynode._nextNode,
        { nullable: true }
    )
    @JoinColumn({ name: "prevNodeId" })
    _prevNode: StoryNode;

    @Expose()
    get prevNode(): string {
        if (!this._prevNode)
            return null;
        return `/storynode/${this._prevNode.id}`;
    }

    @Column({ type: "int", nullable: true })
    @Exclude()
    _nextNodeId: number;

    @OneToOne(
        (type) => StoryNode, (storynode) => storynode._prevNode,
        { nullable: true }
    )
    @JoinColumn()
    _nextNode: StoryNode;

    @Expose()
    get nextNode(): string {
        if (!this._nextNode)
            return null;
        return `/storynode/${this._nextNode.id}`;
    }
}
