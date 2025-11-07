// Интервал корректно очищается при размонтировании компонента

import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    const intervalId = setInterval(onTick, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{count}</h1>;
}
