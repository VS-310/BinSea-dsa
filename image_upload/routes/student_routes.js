const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads/');
    },
    filename: (req,file,cb) => {
        const suffix = Date.now();
        cb(null, suffix+'-'+file.originalname);
    }
});
// const storage = multer.memoryStorage(); //for base64

const allowedImageTypes = ['image/jpeg', 'image/png'];
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024, // Limit file size to 1 MB
    },
    fileFilter: (req, file, cb) => {
        if (!allowedImageTypes.includes(file.mimetype)) {
            return cb(new Error('Only JPEG and PNG files are allowed'), false);
        }
        cb(null, true);
    }
}).array('photo_files', 5); // Accept upto 5 images per request


router.post('/create', upload, async (req,res)=>{
    try{
        const {name,age,email,phone,address}= req.body;
        const photopath = req.file ? req.file.path : null;
        // const photobase64 = req.file ? req.file.buffer.toString('base64') : null;

        const newStudent = new Student({
            name,
            age,
            email,
            phone,
            address,
            photo_file:photopath,
            // photo_file: photobase64,
        });
        await newStudent.save();
        res.status(200).json({message:"Student created succesfully",student:newStudent});
    }
    catch(err){
        console.log(err);
        res.status(404).json({message:"Error occured"});
    }
});

module.exports = router;