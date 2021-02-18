import styles from './MessagesBox.module.css'
import React, { useEffect } from 'react'
import Message from '../message/Message'

function MessagesBox({ messages }) {
  return (
    <div className={styles.container}>
      {messages.map((message, index) => (
        <Message message={message} key={index}></Message>
      ))}
    </div>
  )
}

export default MessagesBox
