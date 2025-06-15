import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new Schema({
title:{
    type:String,
    required:true,
    trim:true  
},
description:{
    type:String,
    required:true,
    trim:true  
},
owner:{
    type:Schema.Types.ObjectId,
    ref:'User'
},
duration:{
    type:Number,
    required:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    videoFile:{
        type:String, //cloudinary
        required:true
    },
    thumbnail:{
        type:String, //cloudinary
    }

},{
    timestamps:true,
})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model('Video',videoSchema);