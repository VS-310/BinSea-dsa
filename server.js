// const ages = [32, 39, 16, 40] ;
// const result = ages.filter(age=> age>=38); // or (checkAge);
// // function checkAge(age){
// //     return age>=38;
// // }

// console.log(result);



// function callback(a,b){
//     console.log("a+b is",a+b);
// }

// const add= (a,b,callback)=>{
//     callback(a,b);
// };

// add(5,9,callback);



// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi '+user.username+'\n', ()=>{console.log('file is '+user.username+'!')});



// const notes = require('./notes.js');
// let a = notes.a;
// console.log("service \n"+a);



// var _ = require('lodash');
// var data = ["person", "person", "1", "2", 1, 2, 'name', 'age'];
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.isString("false"));



// const express = require('express');
// const app = express();

// app.get('/', function (req, res) { // request, response
//     res.send('Hello World, this is a basic thing')
// });

// app.get('/idli', function (req, res) {
//     res.send('Enjoy your idli😊')
// });

// app.post('/person', (req, res) => {
//     res.send('The data is sent')
// });

// app.get('/dosa', (req,res) => {
//     var cust_dosa={
//         name:"masala dosa",
//         is_chutney: false,
//         is_sambar: true,
//     }
//     res.send(cust_dosa)
// });

// app.listen(3000,()=>{
//     console.log("server is live");
// });



const express = require('express');
const app = express();
const db = require('./db.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World');
});

const personroutes = require('./routes/personroutes.js');
app.use('/person', personroutes);

app.listen(3000, () => {
    console.log("Server is live");
});
