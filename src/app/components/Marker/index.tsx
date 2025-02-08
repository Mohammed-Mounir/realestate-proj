'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { BaseLocation } from '@/types';
import Link from 'next/link';

const Marker = ({ location }: { location: BaseLocation }) => {
  const pathname = usePathname();

  const imageWidth = 400;
  const imageHeight = 400;

  if (!location.images.logo) return null;

  return (
    <g
      transform={`translate(${location.mapPosition.left}, ${location.mapPosition.top})`}
    >
      <Link href={`${pathname}/${location.id}`.replace('//', '/')}>
        <motion.image
          className="cursor-pointer"
          href={location.images.logo}
          x={-imageWidth / 2}
          y={-imageHeight / 2}
          width={imageWidth}
          height={imageHeight}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        />
      </Link>
    </g>
  );
};

export default Marker;
