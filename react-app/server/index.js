import express from 'express';
import path from 'path';

import landingRoutes from './routes/landing.js';
import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;

app.use('/', landingRoutes);
app.use('/songs', songsRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));