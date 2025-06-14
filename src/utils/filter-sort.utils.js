
import dayjs from 'dayjs';
import {
  getDatesDiff,
  getDuration
} from './date.utils.js';
import { FilterType, SortType } from '../const.js';

const isPointFuture = (point) => dayjs().isBefore(point.dateFrom);
const isPointPresent = (point) =>
  dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo);
const isPointPast = (point) => dayjs().isAfter(point.dateTo);

const filterByType = {
  [FilterType.ANY]: (points) => [...points],
  [FilterType.FUTURE]: (points) => points.filter(isPointFuture),
  [FilterType.PRESENT]: (points) => points.filter(isPointPresent),
  [FilterType.PAST]: (points) => points.filter(isPointPast),
};

const sortPointsByDate = (pointA, pointB) =>
  getDatesDiff(pointB.dateFrom, pointA.dateFrom);

const sortPointsByTime = (pointA, pointB) => {
  const pointADuration = getDuration(pointA.dateFrom, pointA.dateTo).asMilliseconds();
  const pointBDuration = getDuration(pointB.dateFrom, pointB.dateTo).asMilliseconds();
  return pointBDuration - pointADuration;
};

const sortPointsByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;

const sortByType = {
  [SortType.DAY]: (points) => points.toSorted(sortPointsByDate),
  [SortType.EVENT]: () => {
    throw new Error(`Sort by ${SortType.EVENT} is disabled`);
  },
  [SortType.TIME]: (points) => points.toSorted(sortPointsByTime),
  [SortType.PRICE]: (points) => points.toSorted(sortPointsByPrice),
  [SortType.OFFER]: () => {
    throw new Error(`Sort by ${SortType.OFFER} is disabled`);
  },
};

export {
  isPointFuture,
  isPointPresent,
  isPointPast,
  filterByType,
  sortByType
};
