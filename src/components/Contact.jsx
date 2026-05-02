import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <h2 className="contact-title">WORK WITH ME</h2>
          
          <div className="contact-links">
            <a href="mailto:contact@example.com" className="contact-link">
              <Mail size={24} />
              <span>management@bhanu.com</span>
            </a>
            <div className="social-links">
              <a href="#" className="contact-link" style={{fontSize: '1rem'}}>
                <span>INSTAGRAM</span> <ArrowUpRight size={18} />
              </a>
              <a href="#" className="contact-link" style={{fontSize: '1rem'}}>
                <span>X / TWITTER</span> <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Kambala Bhanu Sri Harsha. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
