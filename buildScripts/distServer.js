import express from 'express';
import path from 'path';
import compression from 'compression';
/* used to test production build */
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get('/users', function(req, res){
  res.json([
    {"id" : 1, "firstName" : "Bob", "lastname" : "Smith", "email" : "bob.smith@gmail.com"},
    {"id" : 2, "firstName" : "Ken", "lastname" : "Krill", "email" : "ken.krill@gmail.com"},
    {"id" : 3, "firstName" : "Travis", "Thompson" : "", "email" : "travis.thompson@yahoo.com"}
  ]);
});

app.listen(port, function(err){
  if (err){
    console.log(err);
  } else {
    console.log('Ready');
  }
});
