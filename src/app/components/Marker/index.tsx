'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import type { ILocation } from '@/types';

const Marker = ({ location }: { location: ILocation }) => {
  const router = useRouter();
  const pathname = usePathname();

  const imageWidth = 400;
  const imageHeight = 400;

  const appendSegmentAndNavigate = () => {
    const newPath = `${pathname}/${location.slug}`.replace('//', '/');
    router.push(newPath);
  };

  if (!location.logo) return null;

  return (
    <g
      transform={`translate(${location.mapPosition.left}, ${location.mapPosition.top})`}
    >
      <motion.image
        className="cursor-pointer"
        onClick={appendSegmentAndNavigate}
        // onClick={() => router.push(`./${pathname}/${location.slug}`)}
        href={location.logo}
        x={-imageWidth / 2}
        y={-imageHeight / 2}
        width={imageWidth}
        height={imageHeight}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />
    </g>
  );
};

export default Marker;
