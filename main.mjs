import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
});

server.listen(port, hostname, () => {
  console.log('Listening on 127.0.0.1');
});