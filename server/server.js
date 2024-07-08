import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dateFormat from 'dateformat';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*', // 允许所有来源访问
    },
});

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});

let messages = [];
let users = [];

io.on('connection', (socket) => {
    console.log('connected');
    socket.emit('init-chat', messages);
    socket.emit('update-users', users);

    socket.on('send-msg', (data) => {
        console.log(data)
        const newMessage = { text: data.text, user: data.user, date: dateFormat(new Date(), 'shortTime') };
        messages.push(newMessage);
        io.emit('read-msg', newMessage);
    });

    socket.on('add-user', (user) => {
        users.push({ id: socket.id, name: user });
        io.emit('update-users', users);
        console.log('add', user);
    });

    socket.on('disconnect', () => {
        users = users.filter((user) => user.id !== socket.id);
        io.emit('update-users', users);
    });
});
