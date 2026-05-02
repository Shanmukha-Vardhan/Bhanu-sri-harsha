import React from 'react';
import { motion } from 'framer-motion';
import './InTheNews.css';

const InTheNews = () => {
  return (
    <section className="in-the-news section-padding container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">IN THE<br/>NEWS</h2>
        
        <div className="news-grid">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item} 
              className="news-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-placeholder news-placeholder">
                <p>NEWSPAPER CLIPPING {item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default InTheNews;
