const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine','hbs');

app.use(express.static(__dirname+'/dist'));

app.get('/',(req,res)=>{
    //res.send("<h1>Hello there</h1>");
    res.render('home.hbs');
});

app.get('/about',(req,res)=>
{
    res.render('about.hbs',{
        'title' : 'About Page',
        'currentYear' : new Date().getFullYear()
    });
});


app.listen(3000,()=>{
    console.log("Server is running at 3000");
});