export class Field {
  constructor({ name, type, value, indentLevel, fields }) {
    this.name = name
    this.value = value

    this.meta = {
      type,
      indentLevel,
      fields,
      hasChanged: false,
    }
  }
}
