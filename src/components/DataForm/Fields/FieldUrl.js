import React from 'react'
import isVideo from 'is-video'

import styles from './Field.module.css'

function FieldString(props) {
  const { label, name, value, handleChange } = props

  const handleChangeValue = e => {
    handleChange(e.target.value)
  }

  return (
    <div className={styles.mediaContainer}>
      <label className={styles.label}>
        {label}
        <input
          className={styles.input}
          type="url"
          readOnly
          value={value}
          name={name}
          onChange={handleChangeValue}
        />
      </label>
      {isVideo(value) ? (
        <video className={styles.media} src={value} autoPlay />
      ) : (
        <img className={styles.media} src={value} alt={name} />
      )}
    </div>
  )
}

export default FieldString
