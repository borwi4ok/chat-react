import './App.css'
import React, { useEffect } from 'react'
import socketIOClient from 'socket.io-client'

function App() {
  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000')

    socket.on('chat', (data) => {
      console.log(data)
    })
  }, [])

  return <div className='App'></div>
}

export default App
