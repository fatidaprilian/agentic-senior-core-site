import { motion } from 'framer-motion';
import { Layers, Zap, Cpu, Code2 } from 'lucide-react';

const features = [
  {
    icon: <Layers size={24} />,
    title: 'Adaptive Context',
    description: 'Dynamically loads rules based on the scope of the task. Keep context compact and relevant.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Token Optimization',
    description: 'Use ascx wrappers to compress noisy output, preserving crucial evidence without token bloat.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'IDE Agnostic',
    description: 'No vendor lock-in. Works effortlessly with Cursor, Windsurf, Copilot, and Gemini natively.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Production-Grade',
    description: 'Pre-configured rules for architecture, security, performance, and UI design synthesis.',
  }
];

export default function Features() {
  return (
    <section id="features" className="section" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-lg">Why Agentic-Senior-Core?</h2>
          <p className="text-lead" style={{ margin: '16px auto 0 auto' }}>
            Elevate your AI agent\'s decision-making process with structured governance.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '32px' 
        }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                background: 'var(--primary-light)',
                color: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {feature.icon}
              </div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
