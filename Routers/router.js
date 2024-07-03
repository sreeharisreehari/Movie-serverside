const express=require('express')

const controller=require('../controllers/controller')

 const ReviewController=require('../controllers/ReviewController')




const multerconfig = require('../Middlewares/multermiddleware')







const router=new express.Router()



// add movies
router.post('/movies/add',multerconfig.single('image'),controller.addMovie)



// all movies
 router.get('/movies/view',controller.getAllMovies)



//edit movie
 router.put('/movie/edit/:id',multerconfig.single('image'),controller.editMovies)

// delete movie
 router.delete('/movie/remove/:id',controller.deleteMovies)


//  add reviews
router.post('/reviews/add',ReviewController.addReview)




// 4)export router

module.exports=router

