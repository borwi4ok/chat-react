import styles from './ModalWindow.module.css'
import React, { useState } from 'react'

function ModalWindow({ getUserName, setModalWindowToggle }) {
  const [name, setName] = useState('')

  function nameInputHandler(event) {
    setName(event.target.value)
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <label htmlFor='name'>Input your name</label>
        <div className={styles.inputBtnWrapper}>
          <input
            className={styles.modalInput}
            id='name'
            onChange={nameInputHandler}
            value={name}
          ></input>
          <button
            className={styles.modalBtn}
            onClick={(event) => {
              event.preventDefault()
              getUserName(name)
              setName('')
              setModalWindowToggle(false)
            }}
          >
            OK
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalWindow
