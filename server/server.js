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

const app = express();

// dev
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const { Group, Game } = require('./src/db/models');

// const groupRouter = require('./routes/groupRouter');

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

// app.use('/group', groupRouter);
app.get('/group', async (req, res) => {
  const group = await Group.findAll({ include: [{ model: Game }] });
  console.log(group);
  res.json(group);
});
// server start
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server start on port ', PORT);
});
