import React from 'react'
import Button from '../Button';
import hero1xIllus from './../../assets/hero-1x-illus.png'
import styles from './Hero.module.css'

const Hero = (props) => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Build stunning websites & apps.</h1>
      <p className={styles.heroPaga}>Create live segments and target the right people for messages based on their behaviors.</p>
      <Button type="primary">Get Started</Button>
      <Button>Learn More</Button>
      <div className={styles.heroImageContainer}>
        <img className={styles.heroImage} src={hero1xIllus} alt="hero 1x illus" />
      </div>
    </div>
  );
}

export default Hero;
