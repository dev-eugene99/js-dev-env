import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "../src/index.html"));

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
