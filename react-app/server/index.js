import express from 'express';
import path from 'path';

import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;

var __dirname = path.resolve();
var rootDirecotry = path.join(__dirname, "..");


app.get('/', function(req, res){
  res.sendFile('/public/index.html', { root: rootDirecotry });
  // res.send('Landing Page')
})

app.use('/songs', songsRoutes);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));