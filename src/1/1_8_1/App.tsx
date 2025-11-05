export default function ClockWrapper() {
  return <Clock time={new Date()} />;
}

// className вычисляется и передается в h1 как prop
function Clock({ time }: { time: Date }) {
  const hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

