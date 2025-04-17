import { useEffect, useState } from 'react';
import useIsMobile from './isMobile';

const useDeviceImageType = (lowQuality: string, highQuality: string) => {
  const isMobile = useIsMobile();

  const [imageLowQuality, setImageLowQuality] = useState(() => lowQuality);
  const [imageHighQuality, setImageHighQuality] = useState(() => highQuality);

  useEffect(() => {
    setImageLowQuality(lowQuality);
    setImageHighQuality(highQuality);
  }, [isMobile]);

  return { imageLowQuality, imageHighQuality };
};

export default useDeviceImageType;
