import { DESTINATIONS_NAMES_MAX_COUNT, DateFormat } from './../const.js';
import { formatDate } from './date.utils.js';

/**
 * Формирует строку с маршрутами (например: "Geneva — Chamonix — Paris" или "Geneva — ... — Paris")
 */
const getRouteLabel = (sortedPoints, destinations) => {
  const pointsDestinations = sortedPoints
    .map((point) => destinations.find((destination) => destination.id === point.destination)?.name);

  if (pointsDestinations.length <= DESTINATIONS_NAMES_MAX_COUNT) {
    return pointsDestinations.join(' &mdash; ');
  }

  return `${pointsDestinations.at(0)}&nbsp;&mdash;&nbsp;...&nbsp;&mdash;&nbsp;${pointsDestinations.at(-1)}`;
};

/**
 * Возвращает период путешествия (например: "19 Mar — 20 Mar")
 */
const getDurationPeriod = (sortedPoints) => {
  if (!sortedPoints.length) {
    return '';
  }

  const startDateTime = formatDate(sortedPoints[0].dateFrom, DateFormat.SHORT);
  if (sortedPoints.length === 1) {
    return startDateTime;
  }

  return `${startDateTime}&nbsp;&mdash;&nbsp;${formatDate(sortedPoints.at(-1).dateTo, DateFormat.SHORT)}`;
};

export {
  getRouteLabel,
  getDurationPeriod
};
