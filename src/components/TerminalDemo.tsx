import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalDemo() {
  const [step, setStep] = useState(0);
  const [version, setVersion] = useState('4.2.9');

  useEffect(() => {
    fetch('https://registry.npmjs.org/@ryuenn3123/agentic-senior-core/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.version) {
          setVersion(data.version);
        }
      })
      .catch(() => {});
  }, []);

  const lines = [
    { type: 'input', text: 'npx @ryuenn3123/agentic-senior-core init', time: 500 },
    { type: 'output', text: `Agentic-Senior-Core CLI v${version}`, time: 900 },
    { type: 'success', text: '✔ Created AGENTS.md, CLAUDE.md, GEMINI.md (native bridges)', time: 1400 },
    { type: 'success', text: '✔ Created .agent-context/rules/ (21 federated rulesets)', time: 1900 },
    { type: 'input', text: 'ascx git status', time: 2800 },
    { type: 'output', text: '[ascx-token-saver] intercepting command: git status', time: 3300 },
    { type: 'output', text: 'On branch main // clean working tree', time: 3700 },
    { type: 'success', text: '[ascx] token reduction: 74% (1200 -> 312 tokens saved)', time: 4200 },
    { type: 'input', text: 'asc optimize doctor', time: 5200 },
    { type: 'output', text: 'Diagnosing ASCX runtime readiness...', time: 5700 },
    { type: 'success', text: '✔ Doctor: active-memory synced, tee write safe. Ready to compress.', time: 6400 }
  ];

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    
    const playSequence = () => {
      setStep(0);
      lines.forEach((line, index) => {
        const timer = setTimeout(() => {
          setStep(index + 1);
        }, line.time);
        timers.push(timer);
      });
    };

    playSequence();
    const loopTimer = setInterval(playSequence, 9500);
    
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loopTimer);
    };
  }, []);

  return (
    <section id="demo" className="section" aria-label="Evidence Playback Readout">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '64px', maxWidth: '800px', textAlign: 'center' }}>
          <span style={{ 
            color: 'var(--color-accent)', 
            fontSize: '0.8rem', 
            fontWeight: 600, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase' 
          }}>
            Terminal Playback
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '24px' }}>
            Token Saver in Action
          </h2>
          <p className="text-lead">
            Watch how the ASCX wrappers dynamically intercept noisy shell outputs and optimize agent interactions.
          </p>
        </div>

        <motion.div
          className="embedded-terminal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ minHeight: '340px' }}
        >
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
            <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
            <div className="terminal-dot" style={{ background: '#27c93f' }}></div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>asc-terminal — evidence-logger</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <AnimatePresence>
              {lines.slice(0, step).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {line.type === 'input' && (
                    <div style={{ display: 'flex', gap: '12px', marginTop: i > 0 ? '16px' : '0' }}>
                      <span style={{ color: 'var(--color-accent)' }}>$</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{line.text}</span>
                    </div>
                  )}
                  {line.type === 'output' && (
                    <div style={{ paddingInlineStart: '20px', color: 'var(--text-muted)' }}>{line.text}</div>
                  )}
                  {line.type === 'success' && (
                    <div style={{ paddingInlineStart: '20px', color: '#27c93f' }}>{line.text}</div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
