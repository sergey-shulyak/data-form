export class Field {
  constructor({ name, type, value, indentLevel, children }) {
    this.name = name
    this.value = value

    this.meta = {
      type,
      indentLevel,
      children,
      hasChanged: false,
    }
  }
}
