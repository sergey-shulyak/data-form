import React from 'react'

function FieldString(props) {
  const { name, value } = props

  return (
    <label>
      {name}
      <input type="text" value={value} name={name} />
    </label>
  )
}

export default FieldString
