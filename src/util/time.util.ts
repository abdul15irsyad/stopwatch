export const renderTime = (time: number) => {
  const milliseconds = Math.floor(time % 1000) / 10;
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / 60_000) % 60;
  const hours = Math.floor(time / 3_600_000);
  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    milliseconds: String(milliseconds).padStart(2, '0')
  };
};

export const mergeTime = ({ hours, minutes, seconds, milliseconds }) =>
  `${hours !== '00' ? `${hours}:` : ''}${minutes}:${seconds}.${milliseconds}`;
