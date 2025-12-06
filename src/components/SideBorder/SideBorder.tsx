import './SideBorder.css';
import { useEffect, useMemo, useState } from 'react';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomChar() {
  return CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
}

function makeColumn(rowCount: number, cols = 1) {
  // return array of strings where each string is one column cell (vertical stack)
  const arr: string[] = [];
  for (let i = 0; i < rowCount * cols; i++) arr.push(randomChar());
  return arr;
}

const SideBorder = () => {
  const [chars1, setChars1] = useState<string[]>(() => makeColumn(Math.ceil(window.innerHeight / 8)));
  const [chars2, setChars2] = useState<string[]>(() => makeColumn(Math.ceil(window.innerHeight / 8)));

  // regenerate on resize so it always fills the viewport height
  useEffect(() => {
    let raf = 0;
    function handleResize() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rowHeight = 10; // approx px per char; matched in CSS
        const rows = Math.ceil(window.innerHeight / rowHeight) + 2;
        setChars1(makeColumn(rows));
        setChars2(makeColumn(rows));
      });
    }

    window.addEventListener('resize', handleResize);

    // also refresh characters occasionally to make noise
    const interval = setInterval(() => {
      setChars1((prev) => prev.map(() => randomChar()));
      setChars2((prev) => prev.map(() => randomChar()));
    }, 2500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      cancelAnimationFrame(raf);
    };
  }, []);

  // minimal memoized render of spans
  const nodes1 = useMemo(() => chars1.map((c, i) => (
    <span key={i} className="char rajdhani-light">{c}</span>
  )), [chars1]);
  const nodes2 = useMemo(() => chars2.map((c, i) => (
    <span key={i} className="char rajdhani-light">{c}</span>
  )), [chars2]);

  return (
    <div className="sideborder" aria-hidden>
      <p className='numbers rotated-text orbitron-regular' aria-hidden>
        <span className='text-group'>00032</span>
        <span className='text-group'>05</span>
        <span className='text-group'>5408</span>
        <span className='text-group'>5408</span>
        <span className='text-group'>CP</span>
        <span className='text-group'>00032</span>
        <span className='text-group'>05</span>
        <span className='text-group'>5408</span>
        <span className='text-group'>5408</span>
        <span className='text-group'>CP</span>
      </p>
      <div className="char-column" aria-hidden>
        {nodes1}
      </div>
      <div className="char-column" aria-hidden>
        {nodes2}
      </div>
    </div>
  );
}

export default SideBorder;