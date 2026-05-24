import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Archive } from 'lucide-react';

export default function TerminalDemo() {
  const [step, setStep] = useState(0);

  const lines = [
    { type: 'input', text: 'npx @ryuenn3123/agentic-senior-core init' },
    { type: 'output', text: 'Agentic-Senior-Core CLI v4.2.4 // Active Oversight Active', delay: 600 },
    { type: 'output', text: '[SYSTEM] Cataloging rules & preparing workspace checklists...', delay: 1000 },
    { type: 'success', text: '✔ [GATE-01] Created AGENTS.md, CLAUDE.md, GEMINI.md', delay: 1400 },
    { type: 'success', text: '✔ [GATE-02] Token optimization policy enabled in active memory', delay: 1800 },
    { type: 'input', text: 'ascx npm run build' },
    { type: 'output', text: '[AUDIT] Building project and verifying rule constraints...', delay: 2800 },
    { type: 'success', text: '✔ [GATE-03] Core rules and checklists passed. Build Successful!', delay: 3500 }
  ];

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    
    const playSequence = () => {
      setStep(0);
      let currentDelay = 0;
      
      lines.forEach((line, index) => {
        if (line.type === 'input') {
          currentDelay += index === 0 ? 500 : 1500;
        } else {
          currentDelay = line.delay ? line.delay : currentDelay + 400;
        }
        
        const timer = setTimeout(() => {
          setStep(index + 1);
        }, currentDelay);
        timers.push(timer);
      });
    };

    playSequence();
    
    const loopTimer = setInterval(playSequence, 9000);
    
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loopTimer);
    };
  }, []);

  return (
    <section id="demo" className="section" aria-label="Evidence Playback Deck">
      <div className="container">
        <div className="section-head">
          <h2 className="heading-lg">Oversight Playback Demo</h2>
          <p className="text-lead">Watch how rule gates are checked, verified, and applied in real time.</p>
        </div>

        <motion.div
          className="terminal-shell"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="terminal-header">
            <div className="terminal-lights">
              <span className="terminal-light is-red" aria-hidden="true"></span>
              <span className="terminal-light is-amber" aria-hidden="true"></span>
              <span className="terminal-light is-green" aria-hidden="true"></span>
            </div>
            <div className="terminal-title">
              <Archive size={14} aria-hidden="true" /> oversight-audit-log
            </div>
            <div className="terminal-status" aria-live="polite">Stamped Run</div>
          </div>

          <div className="terminal-body" aria-label="Simulated terminal outputs">
            {lines.slice(0, step).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="terminal-line"
              >
                {line.type === 'input' && (
                  <div className="terminal-input">
                    <span className="terminal-prompt">~</span>
                    <span className="terminal-text-strong">{line.text}</span>
                  </div>
                )}
                {line.type === 'output' && (
                  <div className="terminal-output">{line.text}</div>
                )}
                {line.type === 'success' && (
                  <div className="terminal-success">{line.text}</div>
                )}
              </motion.div>
            ))}

            <motion.span
              className="terminal-cursor"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
