import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import landingRoutes from './routes/landing.js';
import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '../public')));

// app.use('/', landingRoutes);
app.use('/songs', songsRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));