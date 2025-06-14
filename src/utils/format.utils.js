const toCapitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

const convertSnakeCaseToCamelCase = (string) =>
  string.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const convertCamelCaseToSnakeCase = (string) =>
  string.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export {
  toCapitalize,
  convertSnakeCaseToCamelCase,
  convertCamelCaseToSnakeCase
};
