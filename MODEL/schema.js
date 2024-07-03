const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    title:{
        type:String,
        require:true

    },
    description:{
        type:String,
        require:true

    },
    releaseDate:{
        type:String,
        require:true

    },
    genre:{
        type:String,
        require:true

    },
   
    image:{
        type:String,
        require:true

    },
    imageUrl:{
        type:String,
        require:true

    }
    
})

const movies=mongoose.model
("movies",schema)

module.exports=movies



