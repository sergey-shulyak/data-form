function formFieldsToJson(fields) {
  const result = {}

  for (let field of fields) {
    if (field.meta.type === 'object') {
      result[field.name] = {
        ...fields
          .filter(f => f.meta.parent === field.name)
          .reduce(
            (acc, f) => ({
              ...acc,
              [f.name]: f.value,
            }),
            {}
          ),
      }

      continue
    }

    if (!field.meta.parent) {
      result[field.name] = field.value
      continue
    }
  }

  return JSON.stringify(result)
}

export { formFieldsToJson }
