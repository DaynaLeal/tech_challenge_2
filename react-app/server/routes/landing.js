import express from 'express';
import path from 'path';

const router = express.Router();

var __dirname = path.resolve();
//to go back a directory
var rootDirectory = path.join(__dirname, "..");

router.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(rootDirectory, 'build')));


router.get('/', (req, res) => {
  res.sendFile('/public/index.html', { root: rootDirectory });
  // res.sendFile(path.join(rootDirectory + '/build/index.html'));

  // res.send('Landing Page')
})

export default router;