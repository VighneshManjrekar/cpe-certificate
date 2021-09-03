const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.get('/',(req,res)=>{
    res.render('form');
})

app.post('/form-data',(req,res)=>{
    const name1 = req.body.name1;
    const name2 = req.body.name2;
    const name3 = req.body.name3;
    const seat1 = req.body.seat1;
    const seat2 = req.body.seat2;
    const seat3 = req.body.seat3;
    const guide = req.body.guide;
    const topic = req.body.topic;

    const student = [{name:name1,seat:seat1},{name:name2,seat:seat2},{name:name3,seat:seat3}];
    const project = {topic,guide};

    res.render('index',{
        student,
        project
    })
})

app.listen(7030,()=>{
    console.log('Server Running')
});