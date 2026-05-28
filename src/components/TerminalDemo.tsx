import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalDemo() {
  const [isCompressed, setIsCompressed] = useState(true);

  // Generate 64 token swatch parameters
  const tokens = Array.from({ length: 64 }).map((_, i) => {
    // Deterministic random coordinates for uncompressed scattering
    const angle = (i * 2.4) % (2 * Math.PI);
    const radius = 25 + (i * 3) % 90;
    const scatterX = Math.round(140 + Math.cos(angle) * radius);
    const scatterY = Math.round(60 + Math.sin(angle) * radius);

    // Matrix coordinates for compressed 8x8 grid alignment
    const gridCol = i % 8;
    const gridRow = Math.floor(i / 8);
    const gridX = 90 + gridCol * 20;
    const gridY = 20 + gridRow * 20;

    return {
      id: i,
      scatterX,
      scatterY,
      gridX,
      gridY,
      // Randomly color some tokens for extra detail when bypassed
      colorClass: (i * 7) % 3 === 0 ? 'var(--color-red)' : 'var(--color-orange)'
    };
  });

  return (
    <section id="demo" className="section" aria-label="Token Optimizer" style={{ paddingBlock: '80px' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ marginBottom: '48px', maxWidth: '720px', textAlign: 'left' }}>
          <span className="mono-tag" style={{ color: 'var(--color-accent)', fontWeight: 800 }}>
            Interactive Demo
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Prompt Token Optimizer
          </h2>
          <p className="text-lead" style={{ maxWidth: '640px' }}>
            Watch how our engine compresses scattered instructions and redundant prompt parameters to save up to 80% context window space.
          </p>
        </div>

        {/* Specs dashboard panel */}
        <div className="chassis-panel" style={{ padding: '0', overflow: 'hidden', borderRadius: 'var(--radius-companion)', border: '1.5px solid var(--border-fine)' }}>
          <div className="chassis-panel-inner" />

          {/* Header details */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            borderBottom: '1.5px solid var(--border-fine)', 
            padding: '16px 24px',
            background: 'var(--bg-surface-secondary)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Engine Console</span>
              <span style={{ fontSize: '0.72rem', color: isCompressed ? 'var(--color-green)' : 'var(--color-orange)', fontWeight: 700 }}>
                {isCompressed ? '● Optimized' : '● Scattered'}
              </span>
            </div>
            
            {/* Active compiler toggle indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="mono-tag" style={{ fontSize: '0.65rem' }}>
                {isCompressed ? 'Compression On' : 'Compression Bypassed'}
              </span>
            </div>
          </div>

          {/* Interactive Core Panel grid */}
          <div className="bento-grid" style={{ gap: '0' }}>
            
            {/* Left Console: Guidelines Diagnostic */}
            <div 
              className="bento-span-6" 
              style={{ 
                padding: '24px', 
                borderRight: '1.5px solid var(--border-fine)',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '16px',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)' }}>Diagnostic Log</span>
              
              <div className="inset-console" style={{ flexGrow: 1, minHeight: '180px', display: 'flex', flexDirection: 'column', gap: '8px', borderRadius: '12px' }}>
                <div style={{ color: 'var(--text-muted)' }}>$ ascx npm run build</div>
                
                <AnimatePresence mode="wait">
                  {isCompressed ? (
                    <motion.div
                      key="comp"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
                    >
                      <div style={{ color: 'var(--color-green)', fontWeight: 600 }}>✓ 21 active rule layers parsed successfully.</div>
                      <div style={{ color: 'var(--color-green)', fontWeight: 600 }}>✓ Compressed: 82% prompt parameters sanitized.</div>
                      <div style={{ color: 'var(--color-accent)', marginTop: '8px', borderTop: '1px solid var(--border-fine)', paddingTop: '8px', fontSize: '0.72rem' }}>
                        [Optimization Complete // exit: 0]
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="raw"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', color: 'var(--color-red)' }}
                    >
                      <div>&gt; compiling rule parameters... (74,000 messy tokens)</div>
                      <div>&gt; [WARNING] Duplicate code layers loaded redundantly.</div>
                      <div>&gt; [ERROR] Prompt context overflow. Compile aborted.</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Panel: Token Visualizer */}
            <div 
              className="bento-span-6" 
              style={{ 
                padding: '24px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                gap: '20px'
              }}
            >
              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'left' }}>Token Visualizer</span>

              {/* Dynamic Swatch matrix playground container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '180px',
                background: 'var(--bg-surface-tertiary)',
                border: '1.5px solid var(--border-fine)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                {/* Dotted target bounds */}
                <div style={{
                  position: 'absolute',
                  inset: '16px',
                  border: '1.5px dashed var(--border-fine)',
                  borderRadius: '8px',
                  pointerEvents: 'none'
                }} />

                {/* Render animating swatches dots */}
                {tokens.map((token) => (
                  <motion.div
                    key={token.id}
                    animate={{
                      x: isCompressed ? token.gridX : token.scatterX,
                      y: isCompressed ? token.gridY : token.scatterY,
                      scale: isCompressed ? 0.9 : 1
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: isCompressed ? 350 : 120,
                      damping: isCompressed ? 28 : 12,
                      delay: isCompressed ? (token.id % 8) * 0.008 : 0
                    }}
                    style={{
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isCompressed ? 'var(--color-green)' : token.colorClass,
                      boxShadow: isCompressed ? '0 0 6px var(--color-green)' : 'none'
                    }}
                  />
                ))}
              </div>

              {/* Slider switch dial selector */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                borderTop: '1.5px solid var(--border-fine)', 
                paddingTop: '16px' 
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Optimizer Control</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {isCompressed ? '5.6K optimized tokens active' : '28.4K uncalibrated tokens'}
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.68rem', color: !isCompressed ? 'var(--color-orange)' : 'var(--text-muted)', fontWeight: 700 }}>BYPASS</span>
                  
                  {/* Sliding switch button */}
                  <button
                    onClick={() => setIsCompressed(!isCompressed)}
                    aria-label="Toggle token optimizer"
                    title={isCompressed ? "Bypass prompt compiler" : "Engage prompt compiler"}
                    style={{
                      width: '44px',
                      height: '22px',
                      borderRadius: '11px',
                      backgroundColor: 'var(--bg-surface-tertiary)',
                      border: '1.5px solid var(--border-fine)',
                      cursor: 'pointer',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '2px',
                      outline: 'none'
                    }}
                  >
                    <motion.div
                      animate={{ x: isCompressed ? 22 : 0 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: isCompressed ? 'var(--color-green)' : 'var(--color-orange)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                        filter: isCompressed ? 'drop-shadow(0 0 4px var(--color-green))' : 'drop-shadow(0 0 4px var(--color-orange))'
                      }}
                    />
                  </button>

                  <span style={{ fontSize: '0.68rem', color: isCompressed ? 'var(--color-green)' : 'var(--text-muted)', fontWeight: 700 }}>ENGAGE</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
