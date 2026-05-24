import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalDemo() {
  const [step, setStep] = useState(0);

  const lines = [
    { type: 'input', text: 'npx @ryuenn3123/agentic-senior-core init', time: 500 },
    { type: 'output', text: 'Agentic-Senior-Core CLI // The Masterpiece', time: 1000 },
    { type: 'output', text: 'Curating rules & preparing canvas...', time: 1800 },
    { type: 'success', text: 'Created AGENTS.md, CLAUDE.md, GEMINI.md', time: 2600 },
    { type: 'input', text: 'ascx npm run build', time: 4000 },
    { type: 'output', text: 'Auditing structure and verifying timeless constraints...', time: 4800 },
    { type: 'success', text: 'Constraints preserved. Execution Flawless.', time: 6000 }
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
    const loopTimer = setInterval(playSequence, 9000);
    
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loopTimer);
    };
  }, []);

  return (
    <section id="demo" style={{ paddingBlock: '60px', width: '100%' }} aria-label="Evidence Playback Readout">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '80px', maxWidth: '800px', textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ marginBottom: '40px' }}>PLAYBACK</h2>
          <div className="gold-line"></div>
        </div>

        <motion.div
          className="art-terminal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '300px' }}>
            <AnimatePresence>
              {lines.slice(0, step).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {line.type === 'input' && (
                    <div style={{ display: 'flex', gap: '16px', marginTop: i > 0 ? '24px' : '0' }}>
                      <span style={{ color: 'var(--color-accent)' }}>$</span>
                      <span style={{ color: 'var(--text-primary)' }}>{line.text}</span>
                    </div>
                  )}
                  {line.type === 'output' && (
                    <div style={{ paddingInlineStart: '24px', color: 'var(--text-muted)' }}>{line.text}</div>
                  )}
                  {line.type === 'success' && (
                    <div style={{ paddingInlineStart: '24px', color: 'var(--color-accent)' }}>{line.text}</div>
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
