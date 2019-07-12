import React from 'react'
import FieldManager from './FieldManager'

function FieldObject(props) {
  const { name, meta } = props

  return (
    <label>
      {name}
      {meta.fields.map(field => (
        <FieldManager field={field} />
      ))}
    </label>
  )
}

export default FieldObject
