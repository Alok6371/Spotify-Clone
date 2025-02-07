import mongoose, { mongo, Schema } from "mongoose";

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    }, astist: {
        type: String,
        required: true
    }, imageURL: {
        type: String,
        required: true
    }, songURL: {
        type: String,
        required: true
    },audioUrl:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    albumsId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Album',
        required:true
    }
},{timestamps:true});

export const Song=mongoose.model('Song',songSchema)