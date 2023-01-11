import React from "react";
import "../../styles/hero.css";
import pic1 from "../../images/pic1.png";
const Hero = () => {
  return (
    <section className='hero_section'>
      <div className='container'>
        <div className='hero__wrapper'>
          <div className='hero__content'>
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className='highlight'>Promote Your Brand</h2>
            </div>
            <p className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              dolores laboriosam aspernatur placeat nesciunt repellat tempore!
              Dignissimos vitae corporis voluptatem ipsa aperiam ipsam officia
              quae quod repellat harum, possimus sunt?
            </p>
            <div className='hero__btns'>
              <button className='primary__btn'>Get Started Now</button>
              <button className='secondary__btn'>Discover More</button>
            </div>
          </div>
          <div className='hero__img'>
            <img src={pic1} className='hero-img' alt='hero-img'></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
