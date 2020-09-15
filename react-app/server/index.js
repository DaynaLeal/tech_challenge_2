import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from './App';
// import template from './template';
// import bodyParser from 'body-parser';

import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;

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

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
