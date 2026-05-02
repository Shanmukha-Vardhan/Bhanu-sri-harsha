import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery section-padding container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">GALLERY</h2>
        
        <div className="gallery-masonry">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={`gallery-item item-${item}`}>
              <div className="image-placeholder gallery-placeholder">
                <p>PHOTO {item}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
