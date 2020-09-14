import express from 'express';
import bodyParser from 'body-parser';
import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/songs', songsRoutes);

app.get('/', (req, res) => {
  console.log(data);
  res.send('Welcome to My Homepage');
});

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
