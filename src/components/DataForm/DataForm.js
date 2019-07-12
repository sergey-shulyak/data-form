import React from 'react'

import FieldManager from './Fields/FieldManager'

function DataForm(props) {
  const { fields } = props

  return (
    <form>
      {fields.map(field => (
        <FieldManager field={field} />
      ))}
    </form>
  )
}

export default DataForm
