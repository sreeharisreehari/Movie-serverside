const express=require('express')

const controller=require('../controllers/controller')

// import
// const projectcontroller=require('../controllers/projectcontroller')




const multerconfig = require('../Middlewares/multermiddleware')







const router=new express.Router()



// add movies
router.post('/movies/add',multerconfig.single('image'),controller.addMovie)



// all movies
 router.get('/movies/view',controller.getAllMovies)



//edit movie
 router.put('/movie/edit/:id',multerconfig.single('image'),controller.editMovies)

// g)delete project
// router.delete('/project/remove/:id',jwtmiddlewatre,projectcontroller.deleteproject)

// h)editprofile
// router.put('/profile/update/:id',jwtmiddlewatre,multerconfig.single('profile'),usercontroller.edituser)


// 4)export router

module.exports=router

