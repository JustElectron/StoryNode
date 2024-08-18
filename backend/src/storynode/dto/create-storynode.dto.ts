import { IsString, IsInt, IsEnum, IsArray, IsOptional, ValidateIf } from "class-validator"
import { NodeTypes } from "../entities/storynode.entity"

export class CreateStorynodeDto {
    @IsString()
    name: string;

    @IsString()
    text: string;

    @IsEnum(NodeTypes)
    nodeType: NodeTypes;

    @IsArray()
    @ValidateIf((obj) => obj.nodeType === NodeTypes.ACTION_NODE)
    @IsOptional()
    nodeActions: string[];

    @IsInt()
    @IsOptional()
    prevNodeId: number;

    @IsInt()
    @IsOptional()
    nextNodeId: number;
}
