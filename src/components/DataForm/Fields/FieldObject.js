import React from 'react'

import styles from './Field.module.css'

function FieldObject(props) {
  const { label } = props

  return <label className={styles.label}>{label}</label>
}

export default FieldObject
