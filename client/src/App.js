import styles from './App.module.css'
import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import OnlineUsers from './components/onlineUsers/OnlineUsers'
import MessagesBox from './components/messagesBox/MessagesBox'
import SendMessage from './components/sendMessage/SendMessage'
import ChatRoomsBox from './components/chatRoomsBox/ChatRoomsBox'
import ModalWindow from './components/modalWindow/ModalWindow'

function App() {
  const [message, setMessage] = useState('')
  const [messages, setAllMessages] = useState([])

  const [modalWindowToggle, setModalWindowToggle] = useState(true)
  const [userName, setUserName] = useState('')

  //connect with server
  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000')

    socket.on('chat-message', (message) => console.log(message))

    //send to server
    socket.emit('message', message)
  })

  function handleReceivedMessage(value) {
    setMessage(value)

    setAllMessages((prev) => [...prev, value])
  }

  function getUserName(name) {
    setUserName(name)
    console.log(name)
  }

  return (
    <div className={styles.app}>
      {modalWindowToggle ? (
        <ModalWindow
          getUserName={getUserName}
          setModalWindowToggle={setModalWindowToggle}
        ></ModalWindow>
      ) : (
        <React.Fragment>
          <div className={styles.leftMainCol}>
            <OnlineUsers></OnlineUsers>

            <MessagesBox messages={messages}></MessagesBox>

            <SendMessage handleReceivedMessage={handleReceivedMessage}></SendMessage>
          </div>
          <div className={styles.rightMainCol}>
            <ChatRoomsBox></ChatRoomsBox>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default App
