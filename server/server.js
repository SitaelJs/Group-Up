const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// session
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const redisClient = redis.createClient();
const morgan = require('morgan');
const gamesRouter = require('./src/routes/games.router');
const groupsRouter = require('./src/routes/groups.router');

const app = express();

// dev

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name: 'sId',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: 'mlkfdamfdskjnfsgnjk',
    resave: false,
  })
);

// routes
app.use('/games', gamesRouter);
app.use('/groups', groupsRouter);

// server start
app.listen(PORT, () => {
  console.log('Server start on port ', PORT);
});
