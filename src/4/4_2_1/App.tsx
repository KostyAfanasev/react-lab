// Добавлен ref для управления элементом video и обработчики событий для 

import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    if (nextIsPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    setIsPlaying(nextIsPlaying);
  }

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source
          src="flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
