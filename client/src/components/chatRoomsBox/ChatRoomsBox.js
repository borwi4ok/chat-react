import styles from './ChatRoomsBox.module.css'
import React, { useEffect, useState } from 'react'
import ChatRoom from '../chatRoom/ChatRoom'

function ChatRoomsBox({ setChatId }) {
  return (
    <div className={styles.container}>
      Chats:
      <ChatRoom name='first chat' setChatId={(id) => setChatId(id)}></ChatRoom>
      <ChatRoom name='second chat' setChatId={(id) => setChatId(id)}></ChatRoom>
      <ChatRoom name='another chat' setChatId={(id) => setChatId(id)}></ChatRoom>
    </div>
  )
}

export default ChatRoomsBox
