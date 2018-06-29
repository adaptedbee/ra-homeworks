function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function isUrl(props, propName, componentName) {
  if (props[propName] !== undefined && 
    isString(props[propName]) &&
    !/^https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'https://vk.com/x'. Validation failed.`);
  }
}

function isBirthday(props, propName, componentName) {
  if (props[propName] !== undefined && 
    isString(props[propName]) &&
    !/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,2}$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} ${props[propName]} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
  }

  const date = new Date(props[propName]);
  const currentDate = new Date();
  if (date > currentDate) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Date can't be greater than current. Validation failed.`);
  }
}
