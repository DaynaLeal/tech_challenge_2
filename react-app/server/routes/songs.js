import express from 'express';
import fs from 'fs';

let jsonData = {}
fs.readFile('../data/songs.json', 'utf-8', (err, data) => {
  if (err) throw err
  
  jsonData = JSON.parse(data)
})

const router = express.Router();

router.get('/', (req, res) => {
  res.send(jsonData);
  console.log(jsonData);
});

export default router;