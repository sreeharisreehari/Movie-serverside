// import mongoose
const mongoose=require('mongoose')

const reviewschema=new mongoose.Schema({
    rating:{
        type:Number,
       

    },
    review:{
        type:String,

    }
    
})

const reviews=mongoose.model
("reviews",reviewschema)

module.exports=reviews



