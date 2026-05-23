import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="section" style={{ paddingTop: '160px', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <motion.div variants={itemVariants} style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '6px 16px', 
              background: 'var(--primary-light)', 
              color: 'var(--primary-color)', 
              borderRadius: '999px',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>
              <Terminal size={16} />
              Adaptive Rules Engine
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="heading-xl">
            Change your AI Agent to code like a <span className="text-gradient">Staff Engineer</span>, not a Junior.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lead" style={{ margin: '0 auto 48px auto' }}>
            A lightweight, production-ready rule pack for AI coding agents. 
            Works seamlessly with Cursor, Windsurf, GitHub Copilot, Claude Code, and Gemini.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#install" className="btn btn-primary">
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#demo" className="btn btn-secondary">
              View Interactive Demo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
