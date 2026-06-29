import { useEffect, useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const INIT_COMMAND = "npx @ryuenn3123/agentic-senior-core status";
const FALLBACK_VERSION = "v5.3.0";

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
    await navigator.clipboard.writeText(INIT_COMMAND);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="top"
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "flex-start",
        paddingBlock: "clamp(56px, 8vw, 96px)",
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
              <span className="badge">Open Source</span>
            </div>

            <h1 className="display-hero">
              Rules for
              <br />
              AI that ships.
            </h1>

            <p className="text-lead">
              Agentic-Senior-Core gives your coding agent a strict operating
              contract: scoped rules, compact responses, validation gates, and
              cleaner command output.
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
              <span className="badge badge-live">{version}</span>
            </div>

            <h2 className="heading-md">
              Check editor status and get install hints.
            </h2>
            <p className="text-body">
              Installs globally via plugin marketplace, or generates a single instruction-tier adapter file for your project.
            </p>

            <div className="command-box">
              <code>{INIT_COMMAND}</code>
              <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy init command"
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
                <li>always-on invariants</li>
                <li>on-demand skills</li>
                <li>hook-injected context</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
