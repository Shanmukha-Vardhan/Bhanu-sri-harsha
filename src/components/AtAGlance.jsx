import React from 'react';
import { motion } from 'framer-motion';
import './AtAGlance.css';

const AtAGlance = () => {
  const stats = [
    { label: 'Matches', value: '150+' },
    { label: 'Runs', value: '4,500+' },

    { label: 'High Score', value: '142*' },
  ];

  return (
    <section className="at-a-glance section-padding container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">AT A GLANCE</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AtAGlance;
