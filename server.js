express = require('express');

var app = express();

app.use(express.static(__dirname+'/dist'));

app.get('/',(req,res)=>{
    //res.send("<h1>Hello there</h1>");
    res.send({'name' : 'abbas'});
});

app.get('/about',()=>
{
    res.send('About works');
});


app.listen(3000,()=>{
    console.log("Server is running at 3000");
});