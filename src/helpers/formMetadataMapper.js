import { Field } from '../entities/Field'
import isUrl from 'is-url'
import capitalize from 'capitalize'

function mapDataToFormFields(data, indentLevel = 0, parent = null) {
  let fields = {}

  if (!data) {
    return {}
  }

  for (let [key, value] of Object.entries(data)) {
    let type = typeof value
    let subFields = []

    switch (type) {
      case 'string':
        if (isUrl(value)) {
          type = 'url'
        }

        if (value !== '' && !isNaN(Number(value))) {
          type = 'number'
        }

        break
      case 'object':
        subFields = mapDataToFormFields(value, indentLevel + 1, key)
        break
      default:
        break
    }

    fields = {
      ...fields,
      [key]: new Field({
        name: key,
        label: capitalize(key),
        value: value || null,
        type,
        indentLevel,
        parent,
      }),
      ...subFields,
    }
  }

  return fields
}

export { mapDataToFormFields }
