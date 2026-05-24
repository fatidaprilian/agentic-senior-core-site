import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <section className="section" id="top" aria-label="Project Core Release Deck" style={{ width: '100%', paddingTop: '60px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div variants={itemVariants} className="eyebrow" style={{ marginBottom: '24px', color: 'var(--color-accent)' }}>
            AGENTIC SENIOR CORE
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading-xl" style={{ marginBlockEnd: '24px' }}>
            ABSOLUTE <br/> PROOF.
          </motion.h1>

          <motion.div variants={itemVariants} className="gold-line"></motion.div>

          <motion.p variants={itemVariants} className="text-lead" style={{ marginBlockEnd: '40px' }}>
            The strict oversight tool for AI engineering. <br/> Every line, every rule, enforced flawlessly.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
            <a href="#install" className="btn btn-primary" title="Artist Application">
              INITIALIZE
            </a>
            <a href="#demo" className="btn btn-primary" style={{ border: 'none' }} title="Collab Request">
              VIEW PLAYBACK
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
