
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer" aria-label="Archival Footer Registry">
      <div className="container footer-inner">
        <div className="brand">
          <img className="brand-mark" src="/logo.png" alt="Agentic Senior Core" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          <div className="brand-text">
            <span className="brand-name">Agentic Senior Core</span>
            <span className="brand-sub">Strict Rule Pack</span>
          </div>
        </div>
        <div className="footer-links">
          <a 
            href="https://github.com/fatidaprilian/Agentic-Senior-Core" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub Repository"
          >
            <GithubIcon size={18} aria-hidden="true" /> GitHub Repository
          </a>
          <a href="#install" title="Accession Setup">Accession</a>
          <a href="#docs" title="Accession Indexes">Indexes</a>
        </div>
        <p className="footer-note">
          Released under the MIT License. Use freely, enforce strictly.
        </p>
      </div>
    </footer>
  );
}
