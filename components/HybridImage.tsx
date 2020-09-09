import React from 'react';
import { useAmp } from 'next/amp';

interface Props {
    src: string
    height: string
    width: string
    alt: string
}

export const config = { amp: 'hybrid' };

const HybridImage = ({
  src, height, width, alt,
}: Props) => {
  const isAmp = useAmp();

  return (
    <>
      {isAmp ? (
        <amp-img
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
      )}
    </>
  );
};

export default HybridImage;
