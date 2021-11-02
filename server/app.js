// const express = require('express')
// const cors = require('cors')
// const path = require('path');
// require('dotenv').config()
// const PORT = process.env.PORT || 3001
// const http = require('http')
//
//
// //session
// const redis = require('redis')
// const session = require('express-session')
// let RedisStore = require('connect-redis')(session)
// let redisClient = redis.createClient();
//
// const app = express()
//
// //dev
// const morgan = require('morgan')
//
// //middleware
// app.use(morgan('dev'));
// app.use(cors())
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
//
// app.use(
//     session({
//         name:'sId',
//         store: new RedisStore({ client: redisClient }),
//         saveUninitialized: false,
//         secret: 'mlkfdamfdskjnfsgnjk',
//         resave: false,
//     })
// )
//
// //routes
// const server = http.createServer(app);
//
//
//
// //server start
// app.listen(PORT, () => {
//     console.log('Server start on port ', PORT)
// })
//
