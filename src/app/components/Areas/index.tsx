'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Header from '../Header';
import Nav from './nav';
import { areas } from '@/data/real-estate-data';

export default function Areas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header />
      <div ref={containerRef} className="relative w-full h-screen">
        <Image
          key="background-image"
          src="/images/main.jpg"
          alt="Map"
          fill
          className="object-cover"
          priority
        />
        {areas.map((area) => (
          <Nav key={area.id} area={area} ref={containerRef} />
        ))}
      </div>
    </>
  );
}
