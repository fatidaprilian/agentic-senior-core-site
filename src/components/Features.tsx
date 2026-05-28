import { motion } from 'framer-motion';
import { Sparkles, Trash2, MessageSquare, RefreshCw } from 'lucide-react';

const featureList = [
  {
    code: '01',
    colSpan: 'bento-span-8',
    title: 'Smart Rules Organizer',
    description: 'Scans your workspace to load only the specific guidelines required for the active task. Keeps prompt contexts clean, saves AI memory, and prevents token overhead instantly.',
    icon: <Sparkles size={20} style={{ color: 'var(--color-blue)' }} />,
    accentColor: 'var(--color-blue)',
    role: 'Primary Guide'
  },
  {
    code: '02',
    colSpan: 'bento-span-4',
    title: 'Clutter Cleaner',
    description: 'Filters out up to 80% of unnecessary console logs, build outputs, and duplicate instructions so your AI focuses purely on high-quality code.',
    icon: <Trash2 size={20} style={{ color: 'var(--color-orange)' }} />,
    accentColor: 'var(--color-orange)',
    role: 'Optimizer'
  },
  {
    code: '03',
    colSpan: 'bento-span-4',
    title: 'Friendly Response Guide',
    description: 'Enforces a clean response structure to guarantee short, filler-free answers. Cuts down conversational noise and gets straight to the point.',
    icon: <MessageSquare size={20} style={{ color: 'var(--color-purple)' }} />,
    accentColor: 'var(--color-purple)',
    role: 'Regulator'
  },
  {
    code: '04',
    colSpan: 'bento-span-8',
    title: 'Native Editor Sync',
    description: 'Binds rule checklists and validation logs directly inside Cursor, VS Code, Windsurf, or Claude Code. Feeds the exact files and policies seamlessly behind the scenes.',
    icon: <RefreshCw size={20} style={{ color: 'var(--color-green)' }} />,
    accentColor: 'var(--color-green)',
    role: 'Sync Bridge'
  }
];

export default function Features() {
  return (
    <section id="features" className="section" aria-label="Features Grid" style={{ paddingBlock: '80px' }}>
      <div className="container">
        
        {/* Header section */}
        <div style={{ marginBottom: '48px', maxWidth: '720px', textAlign: 'left', position: 'relative' }}>
          <span className="mono-tag" style={{ color: 'var(--color-accent)', fontWeight: 800 }}>
            Features & Capabilities
          </span>
          <h2 className="heading-lg" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Built to make AI coding simple
          </h2>
          <p className="text-lead" style={{ maxWidth: '640px' }}>
            A powerful suite of workspace rule processors tailored to optimize communication between builders and AI partners.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {featureList.map((item, index) => (
            <motion.div
              key={item.code}
              className="chassis-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 90, damping: 18 }}
              style={{ 
                gridColumn: item.colSpan === 'bento-span-8' ? 'span 8' : 'span 4',
                minHeight: '220px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                padding: '28px',
                borderRadius: 'var(--radius-companion)',
                border: '1.5px solid var(--border-fine)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.015)'
              }}
            >
              {/* Inner outline handles */}
              <div className="chassis-panel-inner" />

              {/* Module Header details */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.icon}
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-primary)' }}>{item.role}</span>
                </div>
                <span className="mono-tag" style={{ 
                  fontSize: '0.65rem', 
                  background: 'var(--bg-surface-tertiary)', 
                  padding: '4px 10px', 
                  borderRadius: '9999px',
                  fontWeight: 700
                }}>
                  Layer {item.code}
                </span>
              </div>

              {/* Core description */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBlock: '24px', zIndex: 1, textAlign: 'left' }}>
                <div>
                  <h3 className="heading-md" style={{ marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p className="text-body" style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Spacing alignment measurements */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                borderTop: '1.5px solid var(--border-fine)', 
                paddingTop: '16px', 
                zIndex: 1 
              }}>
                <span style={{ color: item.accentColor, fontWeight: 800, fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.accentColor }} />
                  Safe & Calibrated
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>Active Workspace Status</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
