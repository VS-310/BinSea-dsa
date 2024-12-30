const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const {jwtAuthMiddleWare, generateToken} = require('../jwt.js');

router.post('/signup', async(req, res) => {
    try{
        const newuser = new User(req.body);
        const response = await newuser.save();
        
        console.log('Data saved');

        const payload = {
            id: response._id,
        }
        console.log('Payload is:',payload);

        const token = generateToken(payload);
        console.log('Token is:',token);

        res.status(200).json({reponse: response, token: token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.post('/login', async(req, res) => {
    try{
        const {aadhar_number, password} = req.body;
        const user = await User.findOne({aadhar_number: aadhar_number});

        if(!user || !(await user.comparePassword(password))){
            return res.status(404).json({error:'Invalid Credentials'});
        }
        
        const payload = {
            id: user._id,
        }
    
        const token = generateToken(payload);
        console.log('Token is:',token);

        res.status(200).json({token: token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.get('/profile', jwtAuthMiddleWare, async (req,res) => {
    try{
        const userdata = req.user;
        
        const user = await User.findById(userdata.id);
        res.status(200).json({user});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.put('/profile/password', jwtAuthMiddleWare, async (req,res) => {
    try{
        const user_id = req.user.id;
        const {old_password, new_password} = req.body;

        const user = await User.findById(user_id);

        if(!user || !(await user.comparePassword(old_password))){
            return res.status(404).json({error:'Invalid Credentials'});
        }
        
        user.password = new_password;
        res.status(200).json({message:'Password updated successfully'});

        if(response){
            console.log('Data updated');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid id'});
        }
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.delete('/:id', async (req,res) => {
    try{
        const personid = req.params.id;
        const response = await Person.findByIdAndDelete(personid);
        if(response){
            console.log('Data deleted');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid id'});
        }
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

module.exports = router;