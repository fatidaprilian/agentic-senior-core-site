import ThemeToggle from './ThemeToggle';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Agentic-Senior-Core Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <span>Agentic-Senior-Core</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#demo">How it Works</a>
          <a href="#docs">Documentation</a>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ThemeToggle />
          <a href="https://github.com/fatidaprilian/Agentic-Senior-Core" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <GithubIcon size={20} />
          </a>
          <a href="#install" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
            Install Now
          </a>
        </div>
      </div>
    </nav>
  );
}
