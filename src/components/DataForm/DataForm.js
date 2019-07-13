import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import mergeWith from 'lodash/mergeWith'

import FieldManager from './Fields/FieldManager'
import { AppContext } from '../App'
import { mapDataToFormFields } from '../../helpers/formMetadataMapper'

import fieldShape from './fieldShape'

import styles from './DataForm.module.css'
import { sendData } from '../../api'
import { formFieldsToJson } from '../../helpers/formFieldsToJson'

const merger = (oldField, newField) => {
  if (!oldField) return newField

  if (oldField.meta.hasChanged) {
    return oldField
  } else {
    return newField
  }
}

function DataForm() {
  const data = useContext(AppContext)
  const newFields = mapDataToFormFields(data)

  const [fields, setFields] = useState(newFields)

  useEffect(() => {
    const mergedFields = mergeWith(fields, newFields, merger)

    setFields(mergedFields)
  }, [newFields, fields])

  const handleChange = fieldName => value => {
    setFields({
      ...fields,
      [fieldName]: {
        ...fields[fieldName],
        value,
        meta: {
          ...fields[fieldName].meta,
          hasChanged: true,
        },
      },
    })
  }

  const handlePreventSubmit = e => {
    e.preventDefault()
  }

  const handleSubmit = () => {
    const data = formFieldsToJson(Object.values(fields))

    sendData(process.env.REACT_APP_API_ENDPOINT, data)
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handlePreventSubmit}>
        {Object.values(fields).map(field => (
          <FieldManager
            key={field.name}
            field={field}
            handleChange={handleChange(field.name)}
          />
        ))}
        <button className={styles.buttonSubmit} onClick={handleSubmit}>
          SAVE
        </button>
      </form>
    </div>
  )
}

DataForm.propTypes = {
  fields: PropTypes.arrayOf(fieldShape),
}

export default DataForm
