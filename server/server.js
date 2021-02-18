const io = require('socket.io')(4000, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    socket.broadcast.emit('chat-message', message)
  })
})
