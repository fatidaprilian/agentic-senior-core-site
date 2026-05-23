

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '48px 0', marginTop: '64px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div className="logo" style={{ color: 'var(--text-secondary)' }}>
          <img src="/logo.png" alt="Agentic-Senior-Core Logo" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 0.8 }} />
          <span>Agentic-Senior-Core</span>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a href="https://github.com/fatidaprilian/Agentic-Senior-Core" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GithubIcon size={18} />
            <span>GitHub Repository</span>
          </a>
        </div>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
          Released under the MIT License. Use freely, enforce strictly.
        </p>
      </div>
    </footer>
  );
}
