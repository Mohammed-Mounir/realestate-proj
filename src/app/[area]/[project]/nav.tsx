'use client';

import { IBuilding } from '@/types';
import { motion } from 'framer-motion';

export default function Nav({ building }: { building: IBuilding }) {
  return (
    <motion.button
      key={building.id}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 shadow-lg"
      style={building.position}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {building.name}
    </motion.button>
  );
}
