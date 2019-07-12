import React from 'react'
import Color from 'color'

import FieldObject from './FieldObject'
import FieldString from './FieldString'
import FieldNumber from './FieldNumber'
import FieldUrl from './FieldUrl'
import fieldShape from '../fieldShape'

import styles from './Field.module.css'

const components = {
  object: FieldObject,
  string: FieldString,
  number: FieldNumber,
  url: FieldUrl,
}

function FieldManager({ field }) {
  const FieldComponent = components[field.meta.type]

  return (
    <div
      className={styles.field}
      style={{
        marginLeft: `${field.meta.indentLevel}rem`,
      }}
    >
      <div
        className={styles.nestIndicator}
        style={{
          background: Color('#095383').lighten(0.5 * field.meta.indentLevel),
        }}
      />
      <FieldComponent {...field} />
    </div>
  )
}

FieldManager.propTypes = {
  field: fieldShape,
}

export default FieldManager
