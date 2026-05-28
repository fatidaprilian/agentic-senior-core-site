import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Shield, Zap, Sparkles } from 'lucide-react';

interface RuleOrigin {
  color: string;
  label: string;
  icon: React.ReactNode;
}


const speechBubbleVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 10 }
};

export default function Hero() {
  const [version, setVersion] = useState('4.2.0');
  const [copied, setCopied] = useState(false);
  
  // Track snapping states
  const [connectedRule, setConnectedRule] = useState<string | null>(null);
  const [speechBubbleText, setSpeechBubbleText] = useState<string | null>(null);
  const [isBlinking, setIsBlinking] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);

  // Playful rule pills attributes
  const ruleOrigins: Record<string, RuleOrigin> = {
    clean: { 
      color: 'var(--color-purple)', 
      label: 'Clean Code', 
      icon: <Sparkles size={13} style={{ color: 'var(--bg-surface-secondary)' }} /> 
    },
    secure: { 
      color: 'var(--color-orange)', 
      label: 'Safe Security', 
      icon: <Shield size={13} style={{ color: 'var(--bg-surface-secondary)' }} /> 
    },
    fast: { 
      color: 'var(--color-green)', 
      label: 'Fast Queries', 
      icon: <Zap size={13} style={{ color: 'var(--bg-surface-secondary)' }} /> 
    }
  };

  // Detect system reduced motion settings
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Fetch package version on load
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

  // Soft blink timer for the companion's cute eyes
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Handle snapping events & dynamic companion dialogue
  const handleSnap = (ruleId: string | null) => {
    setConnectedRule(ruleId);
    if (ruleId) {
      if (ruleId === 'clean') {
        setSpeechBubbleText('Wow! I write exceptionally clean code now! ✨');
      } else if (ruleId === 'secure') {
        setSpeechBubbleText('Safe and sound! Locked down and ready! 🔒');
      } else if (ruleId === 'fast') {
        setSpeechBubbleText('Wheee! I am running at light speed! ⚡');
      }
    } else {
      setSpeechBubbleText(null);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('npx @ryuenn3123/agentic-senior-core init');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard accessibility triggers
  const handleKeyboardConnect = (ruleId: string) => {
    if (connectedRule === ruleId) {
      handleSnap(null);
    } else {
      handleSnap(ruleId);
    }
  };

  return (
    <section 
      className="section" 
      id="top" 
      aria-label="Friendly AI Companion Canvas" 
      style={{ 
        width: '100%', 
        minHeight: '90vh', 
        paddingBlockStart: '130px',
        paddingBlockEnd: '64px',
        borderBottom: '1.5px solid var(--border-fine)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container">
        <div className="bento-grid" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Cozy branding and copy block */}
          <div className="bento-span-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            
            {/* Version Tag */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'var(--bg-surface-tertiary)',
              border: '1.5px solid var(--border-fine)',
              borderRadius: '9999px',
              marginBottom: '28px'
            }}>
              <span className="mono-tag" style={{ color: 'var(--color-accent)', fontWeight: 800, fontSize: '0.75rem' }}>v{version}</span>
              <span style={{ opacity: 0.2, color: 'var(--text-muted)' }}>|</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)' }}>Active AI Rules</span>
            </div>

            {/* Cozy displays sans Outfit headers */}
            <h1 className="heading-xl" style={{ marginBottom: '22px' }}>
              Meet your AI’s friendly <br />
              <span style={{ color: 'var(--color-accent)' }}>coding companion.</span>
            </h1>

            <p className="text-lead" style={{ marginBottom: '36px', maxWidth: '540px' }}>
              A soft, playful workspace designed to organize your AI coding assistant. Align guidelines, prevent context clutter, and help your digital partner code safely, cleanly, and at lightning speed.
            </p>

            {/* Inset Terminal Command Panel */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-surface-secondary)',
              border: '1.5px solid var(--border-fine)',
              borderRadius: '20px',
              padding: '14px 20px',
              width: '100%',
              maxWidth: '480px',
              marginBottom: '40px',
              gap: '16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 800 }}>$</span>
                <code style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.86rem', 
                  color: 'var(--text-primary)',
                  fontWeight: 600
                }}>
                  npx @ryuenn3123/agentic-senior-core init
                </code>
              </div>
              
              <button
                onClick={handleCopy}
                aria-label="Copy installation command"
                title="Copy Command"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '12px',
                  border: '1.5px solid var(--border-fine)',
                  color: 'var(--text-muted)',
                  backgroundColor: 'var(--bg-base)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-fine)'}
              >
                {copied ? <Check size={15} style={{ color: 'var(--color-green)' }} /> : <Copy size={15} />}
              </button>
            </div>

            {/* Cozy Bento Statistics Card */}
            <div style={{ display: 'flex', gap: '40px', borderTop: '2px solid var(--border-fine)', paddingTop: '28px', width: '100%', maxWidth: '480px' }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-purple)', fontFamily: 'var(--font-display)' }}>21 Rules</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 500 }}>Ready to Guide</div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-orange)', fontFamily: 'var(--font-display)' }}>-80% Less</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 500 }}>Context Waste</div>
              </div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-green)', fontFamily: 'var(--font-display)' }}>100% Free</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 500 }}>Open Source</div>
              </div>
            </div>

          </div>

          {/* Right Column: Breathing AI Companion Sandbox */}
          <div className="bento-span-6" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div 
              ref={targetRef}
              className="chassis-panel"
              style={{
                width: '100%',
                maxWidth: '460px',
                height: '350px',
                background: 'var(--bg-surface-secondary)',
                border: '1.5px solid var(--border-fine)',
                borderRadius: 'var(--radius-companion)',
                padding: '24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                userSelect: 'none',
                overflow: 'visible'
              }}
            >
              {/* Chassis outline handles */}
              <div className="chassis-panel-inner" />

              {/* Sandbox Top Metadata Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mono-tag" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Playground Sandbox</span>
                
                {/* Status Indicator Dot */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="channel-tag" style={{ fontSize: '0.68rem', color: connectedRule ? 'var(--color-accent)' : 'var(--text-muted)', fontWeight: 700 }}>
                    {connectedRule ? 'Active!' : 'Click to Toggle Rules'}
                  </span>
                  <div 
                    style={{ 
                      backgroundColor: connectedRule ? 'var(--color-green)' : 'var(--text-muted)', 
                      width: '8px', 
                      height: '8px',
                      borderRadius: '50%',
                      boxShadow: connectedRule ? '0 0 8px var(--color-green)' : 'none',
                      transition: 'all 0.3s'
                    }} 
                  />
                </div>
              </div>

              {/* Main Interactive Canvas */}
              <div style={{ position: 'relative', height: '240px', marginTop: '16px' }}>
                
                {/* Speech Bubble Above AI Companion */}
                <AnimatePresence>
                  {speechBubbleText && (
                    <motion.div
                      variants={speechBubbleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      style={{
                        position: 'absolute',
                        left: '190px',
                        top: '-15px',
                        width: '210px',
                        background: 'var(--text-primary)',
                        color: 'var(--bg-base)',
                        padding: '12px 16px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        zIndex: 25,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        textAlign: 'center',
                        pointerEvents: 'none'
                      }}
                    >
                      {speechBubbleText}
                      {/* Triangle tail for speech bubble */}
                      <div style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(45deg)',
                        width: '12px',
                        height: '12px',
                        backgroundColor: 'var(--text-primary)'
                      }} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Left Side: Rule Selector Pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'absolute', left: 0, top: '24px', zIndex: 15 }}>
                  {Object.keys(ruleOrigins).map((ruleId) => {
                    const isConnected = connectedRule === ruleId;
                    const origin = ruleOrigins[ruleId];

                    return (
                      <button
                        key={ruleId}
                        onClick={() => handleKeyboardConnect(ruleId)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 16px',
                          background: isConnected ? origin.color : 'var(--bg-surface-secondary)',
                          color: isConnected ? 'white' : 'var(--text-primary)',
                          borderRadius: '24px',
                          border: isConnected ? `2px solid ${origin.color}` : '2px solid var(--border-fine)',
                          cursor: 'pointer',
                          boxShadow: isConnected ? `0 6px 16px rgba(0,0,0,0.08)` : '0 4px 10px rgba(0,0,0,0.02)',
                          transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.15)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          outline: 'none',
                          textAlign: 'left'
                        }}
                        onMouseEnter={(e) => {
                          if (!isConnected) {
                            e.currentTarget.style.borderColor = origin.color;
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isConnected) {
                            e.currentTarget.style.borderColor = 'var(--border-fine)';
                            e.currentTarget.style.transform = 'none';
                          }
                        }}
                      >
                        {/* Dot indicator icon */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: isConnected ? 'white' : origin.color,
                          transition: 'all 0.2s'
                        }}>
                          {isConnected ? (
                            <Check size={10} style={{ color: origin.color, strokeWidth: 3 }} />
                          ) : (
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'white' }} />
                          )}
                        </div>
                        
                        <span>{origin.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Side: Animated Breathing Vector AI Companion */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    left: '230px', 
                    top: '36px', 
                    width: '140px', 
                    height: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                  }}
                >
                  <motion.div
                    animate={!prefersReducedMotion ? {
                      scale: [1, 1.03, 1],
                      y: [0, -3, 0]
                    } : {}}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '36px',
                      background: 'rgba(224, 242, 254, 0.95)',
                      border: '4px solid #ffffff',
                      boxShadow: '0 12px 32px rgba(14, 165, 233, 0.16)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      if (connectedRule) {
                        handleSnap(null); // Eject snapped rules on tap
                      }
                    }}
                    title={connectedRule ? "Click to eject rule badge!" : "I am your coding companion!"}
                  >
                    {/* Cute expression vectors */}
                    <svg width="80" height="80" viewBox="0 0 80 80" style={{ pointerEvents: 'none' }}>
                      {/* Soft blushing cheeks */}
                      {connectedRule && (
                        <>
                          <ellipse cx="20" cy="50" rx="7" ry="4" fill="#fb7185" opacity="0.6" />
                          <ellipse cx="60" cy="50" rx="7" ry="4" fill="#fb7185" opacity="0.6" />
                        </>
                      )}
                      
                      {/* Dynamic Eyes */}
                      {connectedRule ? (
                        /* Sparkly happy arched curves eyes when snapped */
                        <>
                          <path d="M16 42 Q20 36 24 42" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />
                          <path d="M56 42 Q60 36 64 42" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />
                        </>
                      ) : isBlinking ? (
                        /* Blinking animation lines */
                        <>
                          <line x1="16" y1="42" x2="28" y2="42" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
                          <line x1="52" y1="42" x2="64" y2="42" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
                        </>
                      ) : (
                        /* Idle cheerful round eyes */
                        <>
                          <circle cx="22" cy="42" r="5" fill="#0284c7" />
                          <circle cx="20.5" cy="40.5" r="1.8" fill="#ffffff" />
                          <circle cx="58" cy="42" r="5" fill="#0284c7" />
                          <circle cx="56.5" cy="40.5" r="1.8" fill="#ffffff" />
                        </>
                      )}

                      {/* Dynamic Mouth */}
                      {connectedRule ? (
                        /* Broad excited mouth */
                        <path d="M32 50 Q40 62 48 50" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />
                      ) : (
                        /* Peaceful happy smile */
                        <path d="M35 50 Q40 55 45 50" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" fill="none" />
                      )}
                    </svg>

                    {/* Display Snapped badge attached directly on companion cloud */}
                    {connectedRule && (
                      <motion.div
                        initial={{ scale: 0, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        style={{
                          position: 'absolute',
                          bottom: '-12px',
                          background: ruleOrigins[connectedRule].color,
                          color: '#ffffff',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.65rem',
                          fontWeight: 800,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {ruleOrigins[connectedRule].icon}
                        <span>{ruleOrigins[connectedRule].label}</span>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

              </div>

              {/* Sandbox Footer Calibration Readouts */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  borderTop: '1.5px solid var(--border-fine)', 
                  paddingTop: '16px',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500
                }}
              >
                <span>AI Workspace Companion</span>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <span>Scale: 1.0</span>
                  {connectedRule && (
                    <button 
                      onClick={() => handleSnap(null)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: 'var(--color-accent)', 
                        fontWeight: 700, 
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      Eject Badges ⏏
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
