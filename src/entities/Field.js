export class Field {
  constructor({ label, name, type, value, indentLevel, parent }) {
    this.label = label
    this.name = name
    this.value = value

    this.meta = {
      type,
      indentLevel,
      hasChanged: false,
      parent,
    }
  }
}
