import styles from './ChatRoom.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

function ChatRoom({ name, setChatId }) {
  const id = name

  return (
    <NavLink className={styles.container} to={`/${id}`} onClick={() => setChatId(id)}>
      {name}
    </NavLink>
  )
}

export default ChatRoom
