import React from 'react'

import FieldString from './FieldString'
import FieldNumber from './FieldNumber'
import FieldUrl from './FieldUrl'
import fieldShape from '../fieldShape'

const components = {
  // object: FieldObject,
  string: FieldString,
  number: FieldNumber,
  url: FieldUrl,
}

function FieldManager({ field }) {
  const FieldComponent = components[field.type]

  return <FieldComponent {...field} />
}

FieldManager.propTypes = {
  field: fieldShape,
}

export default FieldManager
