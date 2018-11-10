const express = require('express');
const hbs = require('hbs');
const fs= require('fs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
   return  new Date().getFullYear()
})
hbs.registerHelper('screamIt',(ab)=>{
    return ab.toUpperCase()
 })
app.set('view engine','hbs');

app.use(express.static(__dirname+'/dist'));
app.use((req,res,next)=>{
    now = new Date().toString();
    log = `${now}: ${req.url} ${req.method}`;
    console.log(log)
    fs.appendFile('server.log',log+'\n',(err)=>{
        if(err)
        {
            console.log('Uncable to write')
        }
    })
    next();
})

app.use((req,res,next)=>{
    res.render('maintenance.hbs')
})

app.get('/',(req,res)=>{
    //res.send("<h1>Hello there</h1>");
    res.render('home.hbs',{
        'title' : 'About Page'
    });
});

app.get('/about',(req,res)=>
{
    res.render('about.hbs',{
        'title' : 'About Page'
    });
});


app.listen(3000,()=>{
    console.log("Server is running at 3000");
});