import React from 'react';
import { motion } from 'framer-motion';
import './ThePlayer.css';

const ThePlayer = () => {
  return (
    <section className="the-player section-padding container">
      <div className="player-grid">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="player-title-col"
        >
          <h2 className="section-title">THE<br/>PLAYER</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="player-bio-col"
        >
          <p className="bio-paragraph">
            <span className="drop-cap">H</span>ailing from the coastal city of Visakhapatnam, Kambala Bhanu Sri Harsha has established himself as a formidable top-order batter. Known for his aggressive stroke play and ability to anchor an innings, he brings a hard-hitting approach to the crease that puts bowlers on the back foot immediately.
          </p>
          <p className="bio-paragraph">
            Beyond his explosive batting, his handy right-arm leg-break bowling makes him a versatile asset in any format of the game. He is an aspirant with his eyes set on higher levels of competitive cricket, constantly refining his technique and mental game.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThePlayer;
