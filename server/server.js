const express = require('express');
const passport = require('passport');
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
// dbbdbd
// dev
const morgan = require('morgan');

// middleware
app.use(passport.initialize());
app.use(passport.session());
require('./passport')(passport);

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

// server start
app.listen(PORT, () => {
  console.log('Server start on port ', PORT);
});
