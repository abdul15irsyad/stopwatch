let timerId: NodeJS.Timeout | null = null;
let remainingTime: number = 0;

self.onmessage = function(event: MessageEvent<{
  type: 'start' | 'pause' | 'reset' | 'resume', 
  duration: number,
}>) {
  console.log('worker');

  const { type, duration } = event.data;

  switch (type) {
    case 'start':
      console.log('start', duration);
      remainingTime = duration;
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        self.postMessage({ type: 'timeout' });
        timerId = null;
      }, remainingTime);
      break;

    case 'pause':
      console.log('pause', duration);
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      break;

    case 'resume':
      console.log('resume', duration);
      timerId = setTimeout(() => {
        self.postMessage({ type: 'timeout' });
        timerId = null;
      }, remainingTime);
      break;

    case 'reset':
      console.log('reset', duration);
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      remainingTime = 0;
      break;
  }
};
