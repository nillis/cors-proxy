const express = require('express'),
 	cors = require('cors'), 
 	request = require('request');

const app = express(); 

app.use('/', cors(), (req, res) => {  
  req.pipe(request(req.query.url)).pipe(res);
});

app.listen(process.env.PORT || 3000); 