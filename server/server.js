require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const expressWs = require('express-ws');

const redisClient = redis.createClient();

const PORT = process.env.PORT || 3001;

const app = express();

const gamesRouter = require('./src/routes/games.router');
const groupsRouter = require('./src/routes/groups.router');
const modesRouter = require('./src/routes/modes.router');
const usersRouter = require('./src/routes/users.router');
const authRouter = require('./src/routes/auth.router');
const groupfilterRouter = require('./src/routes/groupsfilter.router');

// middleware
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

app.use(
  session({
    name: 'sessionId',
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SECRET,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 5 * 60 * 100000,
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/group/filter', groupfilterRouter);
app.use('/auth', authRouter);
app.use('/games', gamesRouter);
app.use('/groups', groupsRouter);
app.use('/modes', modesRouter);
app.use('/users', usersRouter);

// const server = http.createServer((req, res) => {
// Send `index.html` contents.
// })
// ;
// const wss = new ws.Server(
//   {
//     port: 3001,
//   },
//   () => console.log(`Server started on 3001`)
// );

// function broadcastMessage(message, id) {
//   console.log(id);
//   server.clients.forEach((client) => {
//     client.send(JSON.stringify(message));
//   });
// }
//
// server.on('connection', (ws) => {
//   console.log('connected');
//   ws.on('message', (message) => {
//     message = JSON.parse(message);
//     switch (message.event) {
//       case 'message':
//         broadcastMessage(message, message.id);
//         break;
//       case 'connection':
//         broadcastMessage(message, message.id);
//         break;
//     }
//   });
// });
//
// server.listen(3001);
app.listen(PORT, () => {
  console.log('Server start on port ', PORT);
});
