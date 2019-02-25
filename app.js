// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Hi');
// });
// server.listen(3000);
// console.log('hui');

const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
  res.send('Hui');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
