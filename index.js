const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const route = require('./routes/index');
const cors = require('cors');
const { Server } = require('socket.io');
dotenv.config();
const dbURL = process.env.DB_URL;
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Back end API',
      version: '1.0.0',
      description: 'Các request',
    },
    servers: [
      {
        url: 'https://beverage-store7902.onrender.com/',
      },
    ],
  },
  apis: ['./swagger/*.js'],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '30mb',
  })
);
app.use(express.json());
route(app);
mongoose.set('strictQuery', false);
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Success');
});

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('client-submit', (value) => {
    io.sockets.emit('admin-dashboard', {
      message: 'reload',
      userId: value.userId,
    });
  });
  socket.on('admin-submit', (value) => {
    io.sockets.emit(`${value.userId}-dashboard`, {
      message: 'reload',
      userId: value.userId,
    });
  });
});
