const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    await Admin.create({
        username:username,
        password:password,
    })
    res.json({
        message:'Admin Created Successfully'
    })

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const descreption=req.body.descreption;
    const price=req.body.price;
    const imagelink=req.body.imagelink

    const newCourse = await Course.create({
        title,
        descreption,
        imagelink,
        price
    })
    console.log(newCourse)
    res.json({
        msg:"Course Created scuccesfully",courseId:newCourse._id
    })


});

router.get('/courses', adminMiddleware,(req, res) => {
    // Implement fetching all courses logic
   Course.find({})
        .then(function(response){
            res.json({
                courses:response
            })
        })

});

module.exports = router;