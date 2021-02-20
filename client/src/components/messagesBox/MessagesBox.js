import styles from './MessagesBox.module.css'
import React, { useEffect } from 'react'
import Message from '../message/Message'

function MessagesBox({ chats }) {
  function getCurChat() {
    const idCurChat = window.location.pathname.replace('%20', ' ').slice(1)

    const curChatIndex = chats.findIndex((chat) => chat.id == idCurChat)

    if (curChatIndex == -1) return 0

    return curChatIndex
  }

  let currentChat = getCurChat()

  return (
    <div className={styles.container}>
      {chats[currentChat].messages.map((message, index) => (
        <Message message={message} key={index}></Message>
      ))}
    </div>
  )
}

export default MessagesBox
