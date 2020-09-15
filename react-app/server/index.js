import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from './App';
// import template from './template';
// import bodyParser from 'body-parser';

// import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;
// var __dirname = path.resolve();

app.use(express.static('public'));

app.set('etag', 'strong'); //browser caching of static assets should work properly

// app.use(bodyParser.json());

app.get('/', function(req, res){
  // const appString = renderToString(<App />);

  // res.send(template({
  //   body: appString,
  //   title: 'Hello World from the server'
  // }));
  res.send('Landing Page')
})


app.use('/songs', songsRoutes);


//define the react-application here
// app.use('/react-app', express.static(path.resolve(__dirname, `../public`))) //optionally one can add some route handler to protect this resource?
// app.get('/react-app/*', (req,res) => { //this is required to support any client side routing written in react.
//  res.sendFile(path.join(__dirname, '../../public', 'index.html'))
// })



app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
