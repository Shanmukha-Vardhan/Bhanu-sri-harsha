import React from 'react';
import { motion } from 'framer-motion';
import './CareerHighlights.css';

const CareerHighlights = () => {
  const highlights = [
    { year: '2023', title: 'Top Scorer in Zone Tournament', desc: 'Amassed 450 runs in 6 matches at an average of 75.' },
    { year: '2022', title: 'State Selection Camp', desc: 'Selected for the probables list based on outstanding club performances.' },
    { year: '2021', title: 'Maiden Double Century', desc: 'Scored an unbeaten 204* in a highly competitive district-level fixture.' },
  ];

  return (
    <section className="highlights section-padding container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">CAREER<br/>HIGHLIGHTS</h2>
        
        <div className="timeline">
          {highlights.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CareerHighlights;
