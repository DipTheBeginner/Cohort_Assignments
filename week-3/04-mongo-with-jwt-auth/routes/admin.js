const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {JWT_SECRET} = require("../config");
const { User, Admin,Course } = require("../db");
const router = Router();
const jwt=require("jsonwebtoken")

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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const user=await User.find({
        username,
        password
    })

    if(user){
        const token=jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })

    }else{
        res.status(411).json({
            message:"Incorrect email or password"
        })
    }

   
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