import express from 'express';
import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;

app.get('/', function(req, res){
  res.send('Landing Page')
})

app.use('/songs', songsRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
