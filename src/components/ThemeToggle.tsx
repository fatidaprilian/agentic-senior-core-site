import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span className="channel-tag theme-label" style={{ fontSize: '0.6rem' }} aria-hidden="true">LIGHT</span>
      
      {/* Physical Hardware Slide Switch Container */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle system theme calibrator"
        title={isDark ? "Set to Light Mode" : "Set to Dark Mode"}
        style={{
          width: '42px',
          height: '20px',
          borderRadius: '10px',
          backgroundColor: 'var(--bg-surface-tertiary)',
          border: '1.5px solid var(--border-fine)',
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: '2px',
          outline: 'none'
        }}
      >
        <motion.div
          animate={{ x: isDark ? 20 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: 'var(--text-primary)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isDark ? (
            <Moon size={8} style={{ color: 'var(--bg-base)' }} />
          ) : (
            <Sun size={8} style={{ color: 'var(--bg-base)' }} />
          )}
        </motion.div>
      </button>

      <span className="channel-tag theme-label" style={{ fontSize: '0.6rem' }} aria-hidden="true">DARK</span>
    </div>
  );
}
