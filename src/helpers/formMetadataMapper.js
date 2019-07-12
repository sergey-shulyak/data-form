import { Field } from '../entities/Field'
import isUrl from 'is-url'

function mapDataToFormFields(data, indentLevel = 0) {
  const fields = []

  if (!data) {
    return []
  }

  for (let [key, value] of Object.entries(data)) {
    let type = typeof value
    let subFields

    switch (type) {
      case 'string':
        if (isUrl(value)) {
          type = 'url'
        }
        break
      case 'object':
        subFields = mapDataToFormFields(value, indentLevel + 1)
        break
      default:
        break
    }

    fields.push(
      new Field({
        name: key,
        value: value || null,
        type,
        indentLevel,
        fields: subFields || null,
      })
    )
  }

  return fields
}

export { mapDataToFormFields }
