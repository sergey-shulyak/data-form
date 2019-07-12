import { Field } from '../entities/Field'

function mapDataToFormFields(data, indentLevel = 0) {
  const fields = []

  for (let [key, value] of Object.entries(data)) {
    const fieldType = typeof value

    switch (fieldType) {
      case 'string':
      case 'number':
        fields.push(
          new Field({
            name: key,
            type: fieldType,
            value,
            indentLevel,
            children: null,
          })
        )
        break
      case 'object':
        const children = mapDataToFormFields(value, indentLevel + 1)

        fields.push(
          new Field({
            name: key,
            value: null,
            type: fieldType,
            indentLevel,
            children,
          })
        )
        break
      default:
        return
    }
  }

  return fields
}

export { mapDataToFormFields }
