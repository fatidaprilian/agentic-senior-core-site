import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TermIcon } from 'lucide-react';

export default function TerminalDemo() {
  const [step, setStep] = useState(0);

  const lines = [
    { type: 'input', text: 'npx @ryuenn3123/agentic-senior-core init' },
    { type: 'output', text: 'Agentic-Senior-Core CLI v4.2.4', delay: 600 },
    { type: 'output', text: 'Initializing compact project guidance pack...', delay: 1000 },
    { type: 'success', text: '✔ Created AGENTS.md, CLAUDE.md, GEMINI.md', delay: 1400 },
    { type: 'success', text: '✔ Token optimization policy enabled', delay: 1800 },
    { type: 'input', text: 'ascx npm test' },
    { type: 'output', text: 'Running tests through evidence-preserving wrapper...', delay: 2800 },
    { type: 'success', text: 'Tests passed! (Tokens saved: 12,400)', delay: 3500 }
  ];

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    
    // Auto-play the terminal sequence
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
    
    // Loop the animation
    const loopTimer = setInterval(playSequence, 8000);
    
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loopTimer);
    };
  }, []);

  return (
    <section id="demo" className="section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="heading-lg">See it in action</h2>
            <p className="text-lead" style={{ margin: '16px auto 0 auto' }}>
              Just a single command to upgrade your AI agent's logic.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'var(--term-bg)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid var(--term-border)'
            }}
          >
            {/* Terminal Header */}
            <div style={{ 
              background: '#1e293b', 
              padding: '12px 16px', 
              display: 'flex', 
              alignItems: 'center',
              borderBottom: '1px solid var(--term-border)'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f87171' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fbbf24' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#34d399' }}></div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                <TermIcon size={14} /> bash
              </div>
            </div>
            
            {/* Terminal Body */}
            <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--term-text)', minHeight: '320px' }}>
              {lines.slice(0, step).map((line, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ marginBottom: '12px' }}
                >
                  {line.type === 'input' && (
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ color: 'var(--term-prompt)' }}>~</span>
                      <span style={{ color: '#fff' }}>{line.text}</span>
                    </div>
                  )}
                  {line.type === 'output' && (
                    <div style={{ color: 'var(--term-text)', paddingLeft: '20px' }}>
                      {line.text}
                    </div>
                  )}
                  {line.type === 'success' && (
                    <div style={{ color: 'var(--term-success)', paddingLeft: '20px' }}>
                      {line.text}
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Blinking cursor */}
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ 
                  display: 'inline-block', 
                  width: '8px', 
                  height: '16px', 
                  background: 'var(--term-text)',
                  marginLeft: '20px',
                  marginTop: '8px'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
