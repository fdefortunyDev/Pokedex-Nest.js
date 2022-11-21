import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document{

    //mongoId: string;  mongo ya lo da, no hay que ponerlo

    @Prop({ 
        unique: true,
        index: true
    })
    name: string;
    
    @Prop({ 
        unique: true,
        index: true
    })
    no: number;

}

export const pokemonSchema = SchemaFactory.createForClass( Pokemon );