const express = require('express');
const User = require('../models/Users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

//Register
router.post('/register', async (req,res)=>{
    try{
        const {name , email , password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            });
        }

        const user = new User({name, email , password});
        await user.save();

        res.status(201).json({
            message: "User created successfully",
            user
        })


    }catch(error){
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router ;