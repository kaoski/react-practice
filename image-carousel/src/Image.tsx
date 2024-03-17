import React from 'react';

interface ImageProps {
    src: string;
}

const Image = ({src} : ImageProps) => {
  return (
    <img src={src} alt="Image"/>
  )
}

export default Image