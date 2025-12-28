import { useEffect, useRef, useState } from 'react';
import mapSvg from '/Map-of-1st-Century-Iudaea2.svg?raw';
import { useGetJesus } from '../../hooks/useGetJesus';
import Modal from '../Modal';
import CityInfo from '../CityInfo';
import RevealPanelCanvas from '../RevealPanelCanvas';
import Button from '../Button';
import './Map.css';
import type { JesusEventList } from '../../types';

type SelectedPoint = {
  id: string;
  title?: string;
};

const Map = () => {
  const { data: jesusData } = useGetJesus();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<SelectedPoint | null>(null);
  const [eventList, setEventList] = useState<JesusEventList | null>(null);

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

  const getActiveButtonClass = (currentEventList: JesusEventList | null, buttonEventList: JesusEventList) => {
    if (!currentEventList || !buttonEventList) return '';
    return currentEventList === buttonEventList ? 'is-active' : '';
  };

  const handleYearClick = (eventList: JesusEventList) => {
    if (!eventList) return;
    setEventList(eventList);
  }

  return (
    <div className="content">
      <div className="map-container" ref={containerRef}>
        <RevealPanelCanvas>
          <div
            className="map-svg"
            dangerouslySetInnerHTML={{ __html: mapSvg }}
          />
        </RevealPanelCanvas>

      </div>
      <div className="timeline-container">
        <div className="timeline-years">
          {jesusData ? jesusData.year.map((y) => (
            <Button
              key={y.id}
              className={getActiveButtonClass(eventList, y.eventList)}
              onClick={() => handleYearClick(y.eventList)}
            >{y.timeLine}</Button>
          )) : null}
        </div>
        <div className="timeline-events">
          {eventList ? (
            <ul className="event-group-container">
              {eventList.map((item) => {
                const group = item.eventGroup;
                return (
                  <li key={group.label} className="event-group">
                    <strong className="event-group-label orbitron-regular text-yellow">{group.label}</strong>
                    <ol className="events-list">
                      {group.events.map((evt, idx) => (
                        <li key={idx} className="orbitron-regular text-cyan event">{evt}</li>
                      ))}
                    </ol>
                  </li>
                );
              })}
            </ul>
          ) : (
              <p className="orbitron-regular text-white">Select a year to see events.</p>
          )}
        </div>
      </div>

      <Modal open={!!selectedItem} onClose={() => setSelectedItem(null)}>
        <CityInfo city={selectedItem?.title} />
      </Modal>
    </div>
  );
};

export default Map;
