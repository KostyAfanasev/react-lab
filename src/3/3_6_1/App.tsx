import { useState } from 'react';
import { ImageSizeContext } from './Context';
import { places, PlaceType } from './data';
import { getImageUrl } from './utils';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageSizeContext.Provider value={imageSize}>
        <List />
      </ImageSizeContext.Provider>
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place(
  { place }:
  { place: PlaceType }
) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

import { useImageSize } from './Context';

function PlaceImage(
  { place }:
    { place: PlaceType }
) {
  const imageSize = useImageSize();
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
