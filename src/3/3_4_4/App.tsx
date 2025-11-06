import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(images[0].src);
  const hasNext = index < images.length - 1;

  function handleClick() {
    setImageSrc(''); // Очищаем изображение
    setTimeout(() => {
      let nextIndex;
      if (hasNext) {
        nextIndex = index + 1;
      } else {
        nextIndex = 0;
      }
      setIndex(nextIndex);
      setImageSrc(images[nextIndex].src); // Устанавливаем новое изображение
    }, 0);
  }

  let image = images[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <img src={imageSrc} />
      <p>
        {image.place}
      </p>
    </>
  );
}

let images = [{
  place: 'Penang, Malaysia',
  src: 'FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: '3aIiwfm.jpg'
}];
