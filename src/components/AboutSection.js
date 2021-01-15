import React from 'react';
import { motion } from 'framer-motion';
import home1 from '../img/home1.png';
import { Layout, Description, Hide, Image } from '../styles';
import { titleAnim, photoAnim, fade } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  const container = {
    hidden: { y: 0 },
    show: {
      y: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
        staggerChildren: 1,
        when: 'afterChildren',
      },
    },
  };

  return (
    <Layout>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              to make <span>your dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
