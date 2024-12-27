const express = require('express');
const router = express.Router();
const Person = require('../models/person.js');

router.post('/', async(req, res) => {
    try{
        const newperson = new Person(req.body);
        const response = await newperson.save();
        
        console.log('Data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.get('/', async (req,res) => {
    try{
        const data = await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.get('/:workktype', async (req,res) => {
    try{
        const worktype = req.params.workktype;
        if(worktype == 'chef' || worktype == 'waiter' || worktype == 'manager'){
            const response = await Person.find({work: worktype});
            console.log('Response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid worktype'});
        }
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.put('/:id', async (req,res) => {
    try{
        const personid = req.params.id;
        const updatedpersondata = req.body;
        const response = await Person.findByIdAndUpdate(personid, updatedpersondata, {
            new: true,
            runValidators: true,
        });

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