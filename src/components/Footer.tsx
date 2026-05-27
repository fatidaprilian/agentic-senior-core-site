export default function Footer() {
  return (
    <footer className="footer" aria-label="Archival Footer Registry">
      <div className="container footer-inner">
        <div>
          <span className="brand-logo" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>asc</span>
        </div>
        
        <div className="footer-links">
          <a 
            href="https://github.com/fatidaprilian/Agentic-Senior-Core" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub Repository"
          >
            GitHub Repository
          </a>
          <a href="#install" title="Accession Setup">Install Guide</a>
          <a href="#features" title="Features List">Features</a>
          <a href="#docs" title="Archive Links">Archives</a>
        </div>
        
        <p className="footer-note">
          RELEASED UNDER THE MIT LICENSE. CURATE SCIENTIFICALLY, ENFORCE STRICTLY.
        </p>
      </div>
    </footer>
  );
}
