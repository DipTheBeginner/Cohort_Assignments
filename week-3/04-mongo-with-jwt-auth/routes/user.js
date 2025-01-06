const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}=require("../db");
const { JWT_SECRET } = require("../config");
const jwt=require("jsonwebtoken");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    User.create({
        username,
        password,
    })
    res.json({
        msg:"The user is created"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const user=await User.find({
        username,
        password,
    })

    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg:"User not found"
        })
    }


});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({})
    .then(function(response){
        res.json({
            courses:response
        })
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username=req.username;
    console.log(username);
    const courseId=req.params.courseId;

    try{

        await User.updateOne({
            username:username
        },{
            "$push":{
                purchasedCourses:courseId
            }
        })
        
    }catch(e){
        console.log(e)
    } ;
    res.json({
        msg:"Purchase Complete"
    })

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router