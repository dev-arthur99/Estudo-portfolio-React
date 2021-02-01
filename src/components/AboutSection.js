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
            <motion.h2 variants={titleAnim}>Trabalhamos</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              para que <span>seus sonhos</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>se realizem.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Para todas as ideias audiovisuais que você imaginar.
        </motion.p>
        <motion.button variants={fade}>Entre em contato</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="homem com camera" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
