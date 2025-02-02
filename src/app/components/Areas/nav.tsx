'use client';

import React, { useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMarkerPosition } from '@/hooks/useMarkerPosition';

import { IArea } from '@/types';

interface NavProps {
  area: IArea;
}

const Nav = forwardRef<HTMLDivElement, NavProps>(({ area }, ref) => {
  const router = useRouter();
  const [position, setContainerRef] = useMarkerPosition(area.mapPosition);

  useEffect(() => {
    if (
      ref &&
      'current' in ref &&
      ref.current &&
      typeof setContainerRef === 'function'
    ) {
      setContainerRef(ref.current);
    }
  }, [ref, setContainerRef]);

  return (
    <div className="relative w-full h-full">
      <motion.button
        className="absolute"
        style={{
          left: `${'x' in position ? position.x : 0}px`,
          top: `${'y' in position ? position.y : 0}px`,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={() => router.push(`/${area.slug}`)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <Image src={area.logo} alt={area.name} width={200} height={200} />
      </motion.button>
    </div>
  );
});

Nav.displayName = 'Nav';

export default Nav;
