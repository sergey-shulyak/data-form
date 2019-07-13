import React from 'react'

import styles from './Field.module.css'

function FieldString(props) {
  const { label, name, value = '', handleChange } = props

  const handleChangeValue = e => {
    handleChange(e.target.value)
  }

  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="text"
        value={value}
        ƒ
        name={name}
        onChange={handleChangeValue}
      />
    </label>
  )
}

export default FieldString
