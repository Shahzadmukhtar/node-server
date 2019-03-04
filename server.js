var express = require('express');
var hbs = require('hbs');

var app = express();

var port = process.env.PORT || 3000;

app.set('view engine' , hbs);

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partial');

hbs.registerHelper("getcurrentyear" , () => {
return new Date().getFullYear();
});
// app.use((req, res, next) =>
// {
//     res.render('mantance.hbs');
// });

hbs.registerHelper("convert" , (text) => {
return text.toUpperCase();
});

app.get('/',(req , res) => {
    res.render('home.hbs' , {
        pagetitle : "welcome to home",
    });
});

app.get('/bad' , (req , res) => {

res.send({
message: "page not found"
});

});
app.listen(port);