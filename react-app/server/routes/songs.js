import express from 'express';
import fs from 'fs';
// var express = require('express');
// var fs = require('fs');

const router = express.Router();

let jsonData = {}
fs.readFile('../data/songs.json', 'utf-8', (err, data) => {
  if (err) throw err
  
  jsonData = JSON.parse(data)
})

router.get('/', (req, res) => {
  res.json(jsonData);
});

export default router;