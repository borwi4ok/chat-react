import styles from './ChatRoomsBox.module.css'
import React, { useEffect } from 'react'
import ChatRoom from '../chatRoom/ChatRoom'

function ChatRoomsBox() {
  return (
    <div className={styles.container}>
      Chats:
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
      <ChatRoom></ChatRoom>
    </div>
  )
}

export default ChatRoomsBox
