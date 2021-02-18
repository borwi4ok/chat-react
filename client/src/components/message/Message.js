import styles from './Message.module.css'
import React, { useEffect } from 'react'

function Message({ message }) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      <p className={styles.messageOwner}>Me</p>
    </div>
  )
}

export default Message
