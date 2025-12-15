import { useEffect, useRef, useState } from 'react';
import Modal from '../Modal';
import mapSvg from '/Map-of-1st-Century-Iudaea2.svg?raw';
import './Map.css';
import CityInfo from '../CityInfo';
import RevealPanelCanvas from '../RevealPanelCanvas';
// import GridDistortion from '../GridDistortion';

type SelectedPoint = {
  id: string;
  title?: string;
};

const Map = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<SelectedPoint | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Prefer elements marked with data-point
      const pointEl = target.closest('[data-point]') as HTMLElement | null;

      const chosen = pointEl;
      if (!chosen) return;

      // Read a user-friendly title from data-title or title attribute or id
      const title = chosen.getAttribute('data-title') || chosen.getAttribute('title') || chosen.id;
      const id = chosen.getAttribute('data-point') || chosen.id || '';

      if (!id && !title) return; // nothing meaningful to show

      // Open modal with the found info
      setSelectedItem({ id, title: title || undefined });
    };

    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="map-container content" ref={containerRef}>
      <RevealPanelCanvas>
        <div
          className="map-svg"
          dangerouslySetInnerHTML={{ __html: mapSvg }}
        />
      </RevealPanelCanvas>

      <Modal open={!!selectedItem} onClose={() => setSelectedItem(null)}>
        <CityInfo city={selectedItem?.title} />
      </Modal>
    </div>
  );
};

export default Map;
