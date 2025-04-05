import { useEffect, useState } from 'react';

export type UseProgressiveImg = {
  lowQualitySrc: string;
  highQualitySrc: string;
};

export type BlurImg = {
  blur: boolean;
};

const useProgressiveImg = ({
  lowQualitySrc,
  highQualitySrc,
}: UseProgressiveImg): [src: string, BlurImg] => {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return [src, { blur: src === lowQualitySrc }];
};

export default useProgressiveImg;
