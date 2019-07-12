import React from 'react'

import FieldString from './FieldString'
import FieldNumber from './FieldNumber'
import FieldUrl from './FieldUrl'

const components = {
  string: FieldString,
  number: FieldNumber,
  url: FieldUrl,
}

function FieldManager({ field }) {
  const FieldComponent = components[field.type]

  return <FieldComponent field={field} />
}

export default FieldManager
