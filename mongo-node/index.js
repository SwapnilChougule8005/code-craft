import mongoose from 'mongoose';
import express from 'express';
import WebSocket from 'ws';
import http from 'http';
import { RootController } from './src/controller';
import { envConfig } from './src/config';

const PORT = envConfig.getPort();
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/views/index.html`);
});

app.get('/personal-chat', (req, res) => {
  res.sendFile(`${__dirname}/src/views/single-chat.html`);
});

app.use(express.json());
app.use(RootController);

server.listen(PORT, () => {
  mongoose.connect(envConfig.getMongoDBUrl())
    .then(() => console.log('Connected!'))
    .catch((err) => { console.log(error); });
  console.log(`server is listing on port ${PORT}`);
});
