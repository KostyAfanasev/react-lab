// Использован useState вместо useRef для управления состоянием переключателя
// Кнопка корректно переключается между состояниями "Вкл" и "Выкл"

import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => {
      setIsOn(!isOn);
    }}>
      {isOn ? 'Вкл' : 'Выкл'}
    </button>
  );
}