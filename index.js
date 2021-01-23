const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;
const HOST = 'localhost';

app.use(express.static(path.join(__dirname, './client')));

app.listen(PORT, HOST, () => {
  console.log(`Server is listening at ${HOST}:${PORT}`)
});
