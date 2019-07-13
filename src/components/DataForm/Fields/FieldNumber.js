import React from 'react'

import styles from './Field.module.css'

function FieldString(props) {
  const { label, name, value = '', handleChange } = props

  const handleClick = (raise = true) => () => {
    handleChange(raise ? Number(value) + 1 : Number(value - 1))
  }

  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="number"
        readOnly
        value={value}
        name={name}
      />
      <div className={styles.numberModifiersContainer}>
        <button className={styles.numberModifierButton} onClick={handleClick()}>
          ↑
        </button>
        <button
          className={styles.numberModifierButton}
          onClick={handleClick(false)}
        >
          ↓
        </button>
      </div>
    </label>
  )
}

export default FieldString
