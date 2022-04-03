let User = require("./userModel")
let mongoose = require("mongoose")

let bookSchema = new mongoose.Schema(
    {   comapny:{type:String,required:true},
        likes:{type:Number,default:0},
        authorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        coverImage:{type:String,required:true},
        conetent:{type:String,required:true}
        
    },
    {
        timestamps:true,
        versionKey:false
    }
)
module.exports = mongoose.model("book",bookSchema)