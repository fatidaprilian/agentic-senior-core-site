import ThemeToggle from './ThemeToggle';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation" id="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <span className="brand-logo">asc</span>
          <span style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-muted)', 
            fontWeight: 400,
            borderLeft: '1px solid var(--border-fine)',
            paddingLeft: '8px',
            marginLeft: '4px'
          }}>
            Senior Core
          </span>
        </div>
        
        <div className="nav-links">
          <a href="#features" title="Product Features">Features</a>
          <a href="#install" title="Installation Guide">Install</a>
          <a href="#demo" title="Demo Playback">Playback</a>
          <a href="#docs" title="Documentation Reference">Archives</a>
        </div>
        
        <div className="nav-actions">
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
              color: 'var(--text-muted)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
