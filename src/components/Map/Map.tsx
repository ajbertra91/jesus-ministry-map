import { useEffect, useRef, useState } from 'react';
import mapSvg from '/Map-of-1st-Century-Iudaea3.svg?raw';
import { useGetJesus } from '../../hooks/useGetJesus';
import Modal from '../Modal';
import CityInfo from '../CityInfo';
import RevealPanelCanvas from '../RevealPanelCanvas';
import Button from '../Button';
import './Map.css';
import { getPointFor } from './eventPointMap';
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
  const [selectedEvent, setSelectedEvent] = useState<{ groupLabel: string; index: number } | null>(null);

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

  // highlight the SVG element that corresponds to the selected event
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // clear previous highlights
    root.querySelectorAll('.event-highlight').forEach((n) => n.classList.remove('event-highlight'));

    if (!selectedEvent || !eventList) return;

    const { groupLabel, index } = selectedEvent;

    // Find the matching group and event data
    const groupItem = eventList.find((it) => it.eventGroup?.label === groupLabel) || null;
    if (!groupItem) return;
    const evtData = groupItem.eventGroup.events?.[index];

    let targetEl: Element | null = null;

    // 1a) If event data contains a `point` field that matches data-point/id on the SVG
    if (evtData && typeof evtData === 'object' && (evtData as any).point) {
      const pointId = (evtData as any).point;
      targetEl = root.querySelector(`[data-point="${pointId}"]`) || root.querySelector(`#${CSS.escape(pointId)}`);
    }

    // 1b) Prefer the explicit mapping from groupLabel+index -> SVG data-point
    if (!targetEl) {
      const mapped = getPointFor(groupLabel, index);
      if (mapped) {
        try {
          targetEl = root.querySelector(`[data-point="${mapped}"]`) || root.querySelector(`#${CSS.escape(mapped)}`);
        } catch (err) {
          targetEl = root.querySelector(`[data-point="${mapped}"]`) || root.querySelector(`#${mapped}`);
        }
      }
    }

    // 2) Try a data-event mapping using group label + index
    if (!targetEl) {
      const name = `events-${groupLabel.replace(/\s+/g, '-')}-${index}`;
      targetEl = root.querySelector(`[data-event="${name}"]`);
    }

    // 3) Fallback: slug the event label (if it's a string) and try matching data-point or id
    if (!targetEl && typeof evtData === 'string') {
      const slug = evtData.replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      try {
        targetEl = root.querySelector(`[data-point="${slug}"]`) || root.querySelector(`#${CSS.escape(slug)}`);
      } catch (err) {
        // ignore selector errors from CSS.escape in older environments
        targetEl = root.querySelector(`[data-point="${slug}"]`) || root.querySelector(`#${slug}`);
      }
    }

    if (targetEl) {
      targetEl.classList.add('event-highlight');
    }
  }, [selectedEvent, eventList]);

  const getActiveYearClass = (currentEventList: JesusEventList | null, buttonEventList: JesusEventList) => {
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
              className={getActiveYearClass(eventList, y.eventList)}
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
                    <strong className="event-group-label orbitron-regular text-red">{group.label}</strong>
                    <ul className="events-list">
                      {group.events.map((evt, idx) => {
                        const name = `events-${group.label.replace(/\s+/g, '-')}`;
                        const checked = selectedEvent?.groupLabel === group.label && selectedEvent.index === idx;
                        return (
                          <li key={idx} className="orbitron-regular text-cyan event">
                            <label className="event-label">
                              <input
                                type="radio"
                                className="event-radio"
                                name={name}
                                value={evt}
                                checked={checked}
                                onChange={() => {
                                  console.log({ groupLabel: group.label, index: idx })
                                  setSelectedEvent({ groupLabel: group.label, index: idx })}
                                }
                              />
                              <span>{evt}</span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
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
