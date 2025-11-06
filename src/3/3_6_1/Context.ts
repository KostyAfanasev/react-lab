import { createContext, useContext } from 'react';

export const ImageSizeContext = createContext<number>(100);

export const useImageSize = () => {
  return useContext(ImageSizeContext);
};