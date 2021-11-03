const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const redisClient = redis.createClient();
const gamesRouter = require('./src/routes/games.router');
const groupsRouter = require('./src/routes/groups.router');
const modesRouter = require('./src/routes/modes.router');
const userRouter = require('./src/routes/users.router');

const PORT = process.env.PORT || 3001;

const app = express();

const authRouter = require('./src/routes/auth.router');

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
      maxAge: 10 * 60 * 1000,
      httpOnly: false,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/games', gamesRouter);
app.use('/groups', groupsRouter);
app.use('/modes', modesRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log('Server start on port ', PORT);
});
