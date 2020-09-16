import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import songsRoutes from './routes/songs.js';


const app = express();
const PORT = 5000;
var __dirname = path.resolve();

// middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(bodyParser.json());

app.use('/songs', songsRoutes);

app.get('/', (req, res) => {
  res.sendFile('public/index.html' , { root : __dirname});
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
