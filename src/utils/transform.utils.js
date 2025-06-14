import { convertSnakeCaseToCamelCase, convertCamelCaseToSnakeCase } from './format.utils.js';

const deepCamelise = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map(deepCamelise);
  }

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      convertSnakeCaseToCamelCase(key),
      deepCamelise(value),
    ])
  );
};

const deepSnake = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map(deepSnake);
  }

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      convertCamelCaseToSnakeCase(key),
      deepSnake(value),
    ])
  );
};

// Функции для маппинга между API и моделью приложения
const mapApiDataToPoint = (data) => deepCamelise(data);
const mapPointToApiData = (point) => deepSnake(point);

export {
  deepCamelise,
  deepSnake,
  mapApiDataToPoint,
  mapPointToApiData
};
