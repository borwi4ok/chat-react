import styles from './SendMessage.module.css'
import React, { useState } from 'react'

function SendMessage({ handleReceivedMessage }) {
  const [message, setMessage] = useState('')

  function messageHandler(event) {
    setMessage(event.target.value)
  }

  function sendMessageToParent(event) {
    event.preventDefault()
    handleReceivedMessage(message)
    setMessage('')
  }

  return (
    <div>
      <form className={styles.container}>
        <input
          className={styles.messageInput}
          type='text'
          placeholder='Type message'
          value={message}
          onChange={messageHandler}
        ></input>
        <button
          className={styles.messageBtnSend}
          type='submit'
          onClick={(event) => {
            sendMessageToParent(event)
          }}
        >
          SEND
        </button>
      </form>
    </div>
  )
}

export default SendMessage
