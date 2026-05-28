import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const swatchesList = [
  { id: 'blue', value: '#18a0fb', rgb: '24, 160, 251', label: 'Royal Blue' },
  { id: 'orange', value: '#f24e1e', rgb: '242, 78, 30', label: 'Retro Orange' },
  { id: 'green', value: '#0acf83', rgb: '10, 207, 131', label: 'Emerald Green' }
];

export default function Navbar() {
  const [activeSwatch, setActiveSwatch] = useState('blue');

  const handleSwatchSelect = (swatch: typeof swatchesList[0]) => {
    setActiveSwatch(swatch.id);
    document.documentElement.style.setProperty('--color-accent', swatch.value);
    document.documentElement.style.setProperty('--color-accent-rgb', swatch.rgb);
  };

  return (
    <nav className="master-toolbar" aria-label="System Toolbar Navigation" id="navbar">
      <div className="master-toolbar-inner">
        {/* Brand: Cozy nameplate */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 800, 
            fontSize: '0.85rem', 
            letterSpacing: '-0.02em',
            color: '#ffffff',
            background: 'var(--color-accent)',
            padding: '2px 8px',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(var(--color-accent-rgb), 0.15)'
          }}>
            ascx
          </span>
          <span style={{ 
            fontSize: '0.75rem', 
            fontFamily: 'var(--font-mono)', 
            color: 'var(--text-muted)',
            fontWeight: 600
          }}>
            /rules-engine
          </span>
        </div>
        
        {/* Simple navigation tags using general public words */}
        <div className="nav-links" style={{ display: 'none', gap: '6px', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>
          <a href="#top" title="Home" style={{ color: 'var(--text-muted)', padding: '4px 10px', textDecoration: 'none', transition: 'color 0.2s' }} className="mono-tag">
            Home
          </a>
          <a href="#features" title="System Features" style={{ color: 'var(--text-muted)', padding: '4px 10px', textDecoration: 'none', transition: 'color 0.2s' }} className="mono-tag">
            Features
          </a>
          <a href="#install" title="Calibrate Setup" style={{ color: 'var(--text-muted)', padding: '4px 10px', textDecoration: 'none', transition: 'color 0.2s' }} className="mono-tag">
            Setup
          </a>
          <a href="#demo" title="Interactive Playground" style={{ color: 'var(--text-muted)', padding: '4px 10px', textDecoration: 'none', transition: 'color 0.2s' }} className="mono-tag">
            Playground
          </a>
          <a href="#docs" title="Calibrator Registry" style={{ color: 'var(--text-muted)', padding: '4px 10px', textDecoration: 'none', transition: 'color 0.2s' }} className="mono-tag">
            Registry
          </a>
        </div>
        
        {/* Responsive viewport styles override */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .nav-links { display: flex !important; }
          }
          .mono-tag:hover { color: var(--color-accent) !important; }
        `}} />

        {/* Color Theme Swatches & Theme toggler */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Accent swatches */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} title="Change workspace accent color">
            <span className="channel-tag" style={{ fontSize: '0.55rem', fontWeight: 700, color: 'var(--text-muted)' }}>COLOR:</span>
            <div style={{ display: 'flex', gap: '5px' }}>
              {swatchesList.map((swatch) => (
                <button
                  key={swatch.id}
                  onClick={() => handleSwatchSelect(swatch)}
                  className={`swatch-btn ${activeSwatch === swatch.id ? 'active' : ''}`}
                  style={{ backgroundColor: swatch.value }}
                  aria-label={`Select ${swatch.label} theme`}
                  title={`Select ${swatch.label} theme`}
                />
              ))}
            </div>
          </div>

          <ThemeToggle />
          
          <a
            href="https://github.com/fatidaprilian/Agentic-Senior-Core"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            title="GitHub Repository"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
