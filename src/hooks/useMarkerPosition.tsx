interface PercentagePosition {
  left: string;
  top: string;
}

import { useState, useCallback } from 'react';

export function useMarkerPosition(percentagePosition: PercentagePosition) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = useCallback(
    (container: HTMLDivElement) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = (parseFloat(percentagePosition.left) / 100) * rect.width;
      const y = (parseFloat(percentagePosition.top) / 100) * rect.height;

      setPosition({ x, y });
    },
    [percentagePosition]
  );

  const setContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        updatePosition(node);

        const resizeObserver = new ResizeObserver(() => updatePosition(node));
        resizeObserver.observe(node);

        return () => {
          resizeObserver.disconnect();
        };
      }
    },
    [updatePosition]
  );

  return [position, setContainerRef];
}
