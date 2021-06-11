import Image from 'next/image';
import classes from './Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/dev_pp.png"
          alt="An image showing vishal"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>Hi, I'm Vishal</h1>
      <p>I blog about javascript</p>
    </section>
  );
}

export default Hero;
