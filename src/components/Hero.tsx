import { useEffect, useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const INSTALL_COMMAND = "npm install -g @ryuenn3123/agentic-senior-core";
const FALLBACK_VERSION = "v5.4.0";

type NpmLatestResponse = {
  version?: string;
};

function useNpmVersion() {
  const [version, setVersion] = useState(FALLBACK_VERSION);
  const [status, setStatus] = useState<"loading" | "live" | "fallback">(
    "loading",
  );

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://registry.npmjs.org/@ryuenn3123/agentic-senior-core/latest", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("NPM registry unavailable");
        return res.json() as Promise<NpmLatestResponse>;
      })
      .then((data) => {
        if (!data.version) throw new Error("Missing package version");
        setVersion(`v${data.version}`);
        setStatus("live");
      })
      .catch((error) => {
        if ((error as Error).name === "AbortError") return;
        setVersion(FALLBACK_VERSION);
        setStatus("fallback");
      });

    return () => controller.abort();
  }, []);

  return { version, status };
}

export default function Hero() {
  const { version, status } = useNpmVersion();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="top"
      style={{
        minHeight: "calc(92vh - 64px)",
        display: "flex",
        alignItems: "flex-start",
        paddingBlock: "clamp(44px, 7vw, 84px)",
      }}
    >
      <div className="container">
        <div className="grid-12" style={{ alignItems: "start" }}>
          <motion.div
            className="col-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42 }}
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <span className="badge badge-live">
                {status === "live"
                  ? "Live NPM"
                  : status === "loading"
                    ? "Loading NPM"
                    : "Fallback"}{" "}
                · {version}
              </span>
              <span className="badge badge-violet">23+ Hosts</span>
              <span className="badge">Plugin + Adapter</span>
            </div>

            <h1 className="display-hero">
              Agentic
              <br />
              Senior Core
            </h1>

            <p className="text-lead">
              Universal AI coding rules for agents that need to stay small,
              secure, and maintainable. Install once for plugin hosts, or add
              one adapter file per IDE project.
            </p>

            <div
              className="btn-row"
              style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
            >
              <a className="btn btn-primary" href="#install">
                Install now
              </a>
              <a
                className="btn"
                href="https://github.com/fatidaprilian/Agentic-Senior-Core"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="col-5 neo-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.08 }}
            style={{
              padding: "clamp(20px, 3vw, 32px)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
            aria-label="Quick install command"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <span className="label-mono">Start here</span>
              <img
                src="/logo.png"
                alt=""
                width="56"
                height="56"
                style={{
                  width: 56,
                  height: 56,
                  objectFit: "cover",
                  border: "3px solid var(--border-strong)",
                  background: "var(--bg-surface)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <span className="badge">NPM package</span>
              <span className="badge badge-live">{version}</span>
            </div>

            <h2 className="heading-md">
              One global package, many agent surfaces.
            </h2>
            <p className="text-body">
              Ships native plugin bundles for terminal agents, adapter files for
              IDE agents, on-demand skills, command metadata, ASCX, and an MCP
              stdio server.
            </p>

            <div className="command-box">
              <code>{INSTALL_COMMAND}</code>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy install command"
              >
                {copied ? (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Check size={15} /> Copied
                  </span>
                ) : (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Copy size={15} /> Copy
                  </span>
                )}
              </button>
            </div>

            <div className="neo-card-soft" style={{ padding: 16 }}>
              <div className="label-mono" style={{ marginBottom: 8 }}>
                What it adds
              </div>
              <ul
                style={{
                  paddingInlineStart: 18,
                  color: "var(--text-muted)",
                  display: "grid",
                  gap: 6,
                }}
              >
                <li>AGENTS.md always-on rules</li>
                <li>/asc-review, /asc-audit, /asc-refactor</li>
                <li>asc adapter, asc status, ascx wrapper</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
