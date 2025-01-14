const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("Hello Campus Gemini");
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how IITK works in academics and research";

const generate = async (prompt) => {
    try{
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        return result.response.text();
    }
    catch(err){
        console.error(err);
    }
};
// generate();

app.get('/api/content', async (req,res)=>{
    try{
        const data = req.body.question;
        const result = await generate(data);
        res.send({"result": result});
    }
    catch(err){
        res.send({"error": err});
    }
});

app.listen(3000, ()=>{
    console.log("Server is live");
});
