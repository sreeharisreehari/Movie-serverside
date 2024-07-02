const Movies=require('../MODEL/schema')


// add movies
exports.addMovie=async(req,res)=>{
  console.log('inside project add controller');
 

const  image=req.file.filename
console.log(image);

const {title,description,releaseDate,genre,imageUrl}=req.body
console.log(`${title},${description},${releaseDate},${genre},${imageUrl}`);

try{
  const existingMovie= await Movies.findOne({title})
  if(existingMovie){
      res.status(406).json('Movie already exists in watchlist')
  }
  else{
      const newMovie=new Movies({
         title,description,releaseDate,genre,image,imageUrl
      })
      await newMovie.save()
      res.status(200).json(newMovie)

      
  }

}catch(err){
  res.status(401).json(`resquest failed due to ${err}`)

}









}




// get all movies

exports.getAllMovies=async(req,res)=>{
 
  try{
      const allMovies=await Movies.find()
      res.status(200).json(allMovies)
  }
  catch(err){
      res.status(401).json(`Request failed due to ${err}`)
  }
}


  // edit project
  exports.editMovies=async(req,res)=>{
      const {id}=req.params
      
      const {title,description,releaseDate,genre,imageUrl}=req.body
      const uploadedMovieimage=req.file?req.file.filename:image

      try{
          const updateMovie=await Movies.findByIdAndUpdate({_id:id},{title,description,releaseDate,genre,imageUrl,image:uploadedMovieimage},{new:true})

          await updateMovie.save()
          res.status(200).json(updateMovie)

      }catch(err){
          res.status(401).json(err)
      }

  }

  // delele project

  // exports.deleteproject=async(req,res)=>{
  //     const {id}=req.params

  //     try{
  //         const removeproject=await projects.findByIdAndDelete({_id:id})
  //         res.status(200).json(removeproject)


  //     }catch(err){
  //         res.status(401).json(err)

  //     }


  // }






