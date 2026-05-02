import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-header"
        >
          <p className="hero-subtitle">HARD HITTER • ASPIRANT</p>
          <h1 className="hero-title">KAMBALA<br/>BHANU<br/>SRI HARSHA</h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hero-details"
        >
          <div className="detail-item">
            <span className="detail-label">Role</span>
            <span className="detail-value">Top-order batter</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location</span>
            <span className="detail-value">Visakhapatnam</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Batting</span>
            <span className="detail-value">RHB</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Bowling</span>
            <span className="detail-value">Right-arm Leg Break</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-image-container"
      >
        <div className="image-placeholder">
          <p>[ HERO ACTION SHOT ]</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
