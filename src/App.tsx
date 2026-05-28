import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import TerminalDemo from './components/TerminalDemo';
import Documentation from './components/Documentation';
import Footer from './components/Footer';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Designer Canvas Mouse Coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({
        x: e.clientX,
        y: e.clientY + window.scrollY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Floating Figma Zoom & Coordinate Indicator */}
      <div 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--bg-surface-secondary)',
          border: '1px solid var(--border-fine)',
          padding: '8px 16px',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          zIndex: 1000,
          pointerEvents: 'none',
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
        aria-hidden="true"
      >
        <span style={{ fontWeight: 600, color: 'var(--border-active)' }}>100%</span>
        <span style={{ opacity: 0.3 }}>|</span>
        <span>X: {coords.x}px</span>
        <span>Y: {coords.y}px</span>
      </div>

      <Navbar />

      <main className="page" style={{ paddingTop: '80px' }}>
        <Hero />
        <Features />
        <Installation />
        <TerminalDemo />
        <Documentation />
      </main>

      <Footer />
    </>
  );
}

export default App;
