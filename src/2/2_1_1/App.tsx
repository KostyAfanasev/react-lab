export default function LightSwitch() {
  function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
          bodyStyle.backgroundColor = 'white';
      } else {
          bodyStyle.backgroundColor = 'black';
      }
  }

// onClick передает функцию, а не вызывает её
  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}