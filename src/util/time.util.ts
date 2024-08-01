import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

export const parseTime = (time: number, isTimer = false) => {
  const milliseconds = Math.floor(time % 1000) / 10;
  const seconds = isTimer
    ? Math.ceil(time / 1000) % 60
    : Math.floor(time / 1000) % 60;
  const minutes = isTimer
    ? Math.floor(Math.ceil(time / 1000) / 60) % 60
    : Math.floor(time / 60_000) % 60;
  const hours = isTimer
    ? Math.floor(Math.ceil(time / 1000) / 3_600)
    : Math.floor(time / 3_600_000);
  return { milliseconds, seconds, minutes, hours };
};

export const renderTime = (time: number, isTimer = false) => {
  const { milliseconds, seconds, minutes, hours } = parseTime(time, isTimer);
  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    milliseconds: String(milliseconds).padStart(2, '0')
  };
};

export const mergeTime = ({ hours, minutes, seconds, milliseconds }) =>
  `${hours !== '00' ? `${hours}:` : ''}${minutes}:${seconds}.${milliseconds}`;

export const renderOffset = (timezone: string) => {
  const now = dayjs().tz(timezone);
  const offsetMinutes = now.utcOffset();
  const offsetHours = Math.floor(offsetMinutes / 60);
  return `${offsetHours >= 0 ? '+' : '-'}${Math.abs(offsetHours).toString().padStart(2, '0')}:${Math.abs(
    offsetMinutes % 60
  )
    .toString()
    .padStart(2, '0')}`;
};

export const countTime = ({
  milliseconds = 0,
  seconds,
  minutes,
  hour
}: {
  milliseconds?: number;
  seconds: number;
  minutes: number;
  hour: number;
}) =>
  milliseconds + seconds * 1000 + minutes * 60 * 1000 + hour * 60 * 60 * 1000;
