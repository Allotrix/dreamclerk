import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSwipeContent, setShowSwipeContent] = useState(false);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: posX, clientY: posY } = e;

      setMousePosition({
        x: posX,
        y: posY,
      });

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 500,
            fill: 'forwards',
          }
        );
      }

      const container = document.getElementById('secretariat');
      
      if (container) {
        const rect = container.getBoundingClientRect();
        if (
          posX >= rect.left &&
          posX <= rect.right &&
          posY >= rect.top &&
          posY <= rect.bottom
        ) {
          setShowSwipeContent(true);
        } else {
          setShowSwipeContent(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className='cursor-dot'
        style={{
          display: `${showSwipeContent ? 'none' : 'block' }`,
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 99,
          pointerEvents: 'none',
          width: '5px',
          height: '5px',
          backgroundColor: '#02e29e',
          borderRadius: '50%',
        }}
      ></div>
      <div
        className='cursor-outline'
        ref={cursorOutlineRef}
        style={{
          display: `${showSwipeContent ? 'none' : 'block' }`,
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 99,
          pointerEvents: 'none',
          width: '30px',
          height: '30px',
          border: '2px solid #BABABA',
          borderRadius: '50%',
          backgroundColor: 'transparent',
        }}
      ></div>
      {showSwipeContent && (
        <div
        className='absolute border-2 bg-transparent text-[white] border-mamun-green rounded-full pointer-events-none font-bold font-mamun-font-secondary text-[black] flex flex-col items-center justify-center h-full'
        style={{
          width: '110px',
          height: '110px',
          position: 'fixed',
          top: `${mousePosition.y + 20}px`,
          left: `${mousePosition.x + 20}px`,
          zIndex: 100,
        }}
      >
        Scroll
      </div>
      )}
    </>
  );
};

export default Cursor;
