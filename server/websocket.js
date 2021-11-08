const ws = require('ws');

const wss = new ws.Server(
  {
    port: 3001,
  },
  () => console.log(`Server started on 3001`)
);

wss.on('connection', (ws) => {
  console.log('connected');
  ws.on('message', (message) => {
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadcastMessage(message, message.id);
        break;
      case 'connection':
        broadcastMessage(message, message.id);
        break;
    }
  });
});

function broadcastMessage(message, id) {
  console.log(id);
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}
