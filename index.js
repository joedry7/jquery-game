const express = require('express');

const app = express();
const PORT = 3001;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server is listening at ${HOST}:${PORT}`)
});
