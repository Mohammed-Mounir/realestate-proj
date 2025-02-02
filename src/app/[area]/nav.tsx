'use client';

import { IProject } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Nav({ project }: { project: IProject }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.button
      key={project.id}
      className="absolute"
      style={project.mapPosition}
      onClick={() => router.push(`${pathname}/${project.slug}`)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Image src={project.logo} alt={project.name} width={200} height={200} />
    </motion.button>
  );
}
