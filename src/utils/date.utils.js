import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativetime from 'dayjs/plugin/relativeTime';

import { MSEC_IN_HOUR, MSEC_IN_DAY, DateFormat, DurationFormat } from '../const.js';

dayjs.extend(duration);
dayjs.extend(relativetime);

const getRandomDate = (start = new Date(2023, 3, 1), end = new Date(2023, 4, 1)) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const formatDate = (currentDate, format = DateFormat.FULL) => dayjs(currentDate).format(format);

const getDatesDiff = (dateStringFrom, dateStringTo) =>
  dayjs(dateStringTo).diff(dayjs(dateStringFrom));

const getDuration = (dateStringFrom, dateStringTo) =>
  dayjs.duration(getDatesDiff(dateStringFrom, dateStringTo));

const calculateDuration = (dateFrom, dateTo) => {
  const diff = getDatesDiff(dateFrom, dateTo);

  let pointDuration;

  switch (true) {
    case (diff >= MSEC_IN_DAY):
      pointDuration = dayjs.duration(diff).format(DurationFormat.DAYS);
      break;
    case (diff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(diff).format(DurationFormat.HOURS);
      break;
    default:
      pointDuration = dayjs.duration(diff).format(DurationFormat.MINS);
  }

  return pointDuration;
};

export {
  getRandomDate,
  formatDate,
  calculateDuration,
  getDatesDiff,
  getDuration
};
