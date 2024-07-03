const reviews=require('../MODEL/reviewschema')


// add reviews
exports.addReview=async(req,res)=>{
 



const {rating,review}=req.body

try{
 
 
      const newReview=new reviews({
         review,rating
      })
      await newReview.save()
      res.status(200).json(newReview)

      
  

}catch(err){
  res.status(401).json(`resquest failed due to ${err}`)

}









}