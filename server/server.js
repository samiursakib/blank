const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send({ title: 'get request at root' });
});
const server = http.createServer(app);

server.listen(80, () => console.log('server running at localhost:80'));
