export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="section"
      aria-label="Footer"
      style={{ paddingBlock: 40 }}
    >
      <div className="container">
        <div className="grid-12" style={{ alignItems: "start" }}>
          <div className="col-7">
            <div className="heading-md">Agentic-Senior-Core</div>
            <p className="text-body" style={{ marginTop: 10, maxWidth: 520 }}>
              Production-grade rules engine for AI coding agents. Light by
              default, strict by contract.
            </p>
          </div>
          <div
            className="col-5 btn-row"
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <a className="btn" href="#features">
              Capabilities
            </a>
            <a className="btn" href="#install">
              Install
            </a>
            <a
              className="btn"
              href="https://github.com/fatidaprilian/Agentic-Senior-Core"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid var(--border-strong)",
            marginTop: 28,
            paddingTop: 18,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
          }}
        >
          <span className="label-mono">© {year} MIT License</span>
          <span className="label-mono">
            Built for the Agentic-Senior-Core repo
          </span>
        </div>
      </div>
    </footer>
  );
}
