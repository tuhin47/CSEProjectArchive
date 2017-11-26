var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({
  secret: "Shh, its a secret!"
}));

app.get('/', function(req, res) {
  if(req.cookies.photo)
  console.log('Cookies: ', req.cookies.photo);
  if (req.session.page_views) {
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
  } else {
    req.session.photo = 'link';
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});
app.get('/cook', function(req, res){
   res.cookie('photo', 'link').send('cookie set'); //Sets name = express
});

app.listen(3000);
