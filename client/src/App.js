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

  const [modalWindowToggle, setModalWindowToggle] = useState(true)
  const [userName, setUserName] = useState('')

  //Kostil'
  const [chats, setChats] = useState([{ id: 'first chat', messages: [] }])

  //connect with server
  useEffect(() => {
    const socket = socketIOClient('http://localhost:4000')

    socket.on('chat-message', (messages) => {})

    //send to server
    socket.emit('send-chat-message', message)
  })

  function handleReceivedMessage(value) {
    //delete first '/' and replace %20 with ' '
    const id = window.location.pathname.replace('%20', ' ').slice(1)

    const curChatIndex = chats.findIndex((chat) => chat.id == id)

    setChats((prev) => {
      //push message to exact chat
      prev[curChatIndex].messages.push(value)

      return [...prev]
    })
  }

  function getUserName(name) {
    setUserName(name)
  }

  function setChatId(id) {
    //add chat in arr of chats
    setChats((prev) => {
      const hasChatId = prev.findIndex((chat) => chat.id == id)
      if (hasChatId == -1) return [...prev, { id: id, messages: [] }]
      return [...prev]
    })
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

            <MessagesBox chats={chats}></MessagesBox>

            <SendMessage handleReceivedMessage={handleReceivedMessage}></SendMessage>
          </div>
          <div className={styles.rightMainCol}>
            <ChatRoomsBox setChatId={(id) => setChatId(id)}></ChatRoomsBox>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default App
