const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const route = require('./routes/index');
const cors = require('cors');
const { Server } = require('socket.io');
dotenv.config();
const dbURL = process.env.DB_URL;
const app = express();

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
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Success');
});

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
<<<<<<< HEAD
=======
        credentials: false,
>>>>>>> 75ba47cc1afba528efe1def8b00201099ca72dfd
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
        io.sockets.emit('client-dashboard', {
            message: 'reload',
            userId: value.userId,
        });
    });
});
