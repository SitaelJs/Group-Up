// setupWebSocket.js
const express = require('express')
const cors = require('cors')
const path = require('path');
require('dotenv').config()
const PORT = process.env.PORT || 3001
const http = require('http')



const redis = require('redis')
const session = require('express-session')
const WebSocket = require("ws");
let RedisStore = require('connect-redis')(session)


let redisClient = redis.createClient();

const app = express()
//dev

const morgan = require('morgan')
//middleware
app.use(morgan('dev'));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(
    session({
        name:'sId',
        store: new RedisStore({ client: redisClient }),
        saveUninitialized: false,
        secret: 'mlkfdamfdskjnfsgnjk',
        resave: false,
    })
)
console.log(WebSocket)

// accepts an http server (covered later)
function setupWebSocket(server) {
    // ws instance
    const wss = new WebSocket.Server({ noServer: true });

    // handle upgrade of the request
    server.on("upgrade", function upgrade(request, socket, head) {
        try {
            // authentication and some other steps will come here
            // we can choose whether to upgrade or not

            wss.handleUpgrade(request, socket, head, function done(ws) {
                wss.emit("connection", ws, request);
            });
        } catch (err) {
            console.log("upgrade exception", err);
            socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
            socket.destroy();
            return;
        }
    });

    // what to do after a connection is established
    wss.on("connection", (ctx) => {
        // print number of active connections
        console.log("connected", wss.clients.size);

        // handle message events
        // receive a message and echo it back
        ctx.on("message", (message) => {
            console.log(`Received message => ${message}`);
            ctx.send(`you said ${message}`);
        });

        // handle close event
        ctx.on("close", () => {
            console.log("closed", wss.clients.size);
        });

        // sent a message that we're good to proceed
        // ctx.send("connection established.");
    });
}

const server = http.createServer(app);



setupWebSocket(server);
//server start


server.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})
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
