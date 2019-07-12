import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import FieldManager from './Fields/FieldManager'
import { AppContext } from '../App'
import { mapDataToFormFields } from '../../helpers/formMetadataMapper'

import fieldShape from './fieldShape'

function DataForm() {
  const data = useContext(AppContext)

  if (!data) {
    return
  }

  const fields = mapDataToFormFields(data)

  return (
    <form>
      {fields.map(field => (
        <FieldManager key={field.name} field={field} />
      ))}
    </form>
  )
}

DataForm.propTypes = {
  fields: PropTypes.arrayOf(fieldShape),
}

export default DataForm
