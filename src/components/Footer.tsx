export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="footer" 
      aria-label="Footer" 
      style={{ 
        paddingBlock: '56px', 
        borderTop: '1.5px solid var(--border-fine)', 
        background: 'var(--bg-surface-secondary)',
        position: 'relative'
      }}
    >
      <div className="chassis-panel-inner" />

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '28px' }}>
        
        {/* Upper row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', gap: '20px' }}>
          
          {/* Brand plate */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800, 
              fontSize: '0.86rem',
              color: '#ffffff',
              background: 'var(--color-accent)',
              padding: '4px 10px',
              borderRadius: '8px',
              width: 'fit-content',
              boxShadow: '0 2px 8px rgba(var(--color-accent-rgb), 0.15)'
            }}>
              ASC
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>Open Source AI Coding</span>
          </div>

          {/* Quick links */}
          <div className="footer-links" style={{ display: 'flex', gap: '24px', fontFamily: 'var(--font-body)', fontSize: '0.82rem', alignItems: 'center' }}>
            <a href="https://github.com/fatidaprilian/Agentic-Senior-Core" target="_blank" rel="noopener noreferrer" title="GitHub Codebase" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
              GitHub
            </a>
            <a href="#install" title="Setup Guides" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
              Setup
            </a>
            <a href="#features" title="System Features" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
              Features
            </a>
            <a href="#docs" title="Calibrator Specs" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
              Documentation
            </a>
          </div>
        </div>

        {/* Division border */}
        <div style={{ borderBottom: '1.5px solid var(--border-fine)', width: '100%' }} />

        {/* Bottom copyright block */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
          <div style={{ textAlign: 'left' }}>
            Released under the friendly MIT License. Build freely, validate strictly.
          </div>
          <div>
            © {currentYear} Agentic-Senior-Core
          </div>
        </div>

      </div>
    </footer>
  );
}
