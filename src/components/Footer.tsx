export default function Footer() {
  return (
    <footer className="footer" aria-label="Archival Footer Registry">
      <div className="container footer-inner">
        <div className="brand" style={{ flexDirection: 'column', gap: '8px' }}>
          <span className="brand-name" style={{ fontSize: '1.5rem' }}>A. S. C.</span>
        </div>
        
        <div className="footer-links">
          <a 
            href="https://github.com/fatidaprilian/Agentic-Senior-Core" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub Repository"
          >
            REPOSITORY
          </a>
          <a href="#install" title="Accession Setup">ACCESSION</a>
          <a href="#docs" title="Accession Indexes">ARCHIVES</a>
        </div>
        
        <p className="footer-note">
          RELEASED UNDER THE MIT LICENSE. USE FREELY, ENFORCE STRICTLY.
        </p>
      </div>
    </footer>
  );
}
