import React from "react";
import "../../styles/services.css";
const Services = () => {
  return (
    <section id='service'>
      <div className='container'>
        <div className='services__top-content'>
          <h6 className='subtitle'>Our Services</h6>
          <h2>Save time and managing your business with</h2>
          <h2 className='highlight'>Our best services</h2>
        </div>
        <div className='service_item-wrapper'>
          <div className='services_item'>
            <span className='service_icon'>
              <i class='ri-apps-line'></i>
            </span>
            <h3 className='service__title'>App Development</h3>
            <p className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quaerat fugiat debitis nam excepturi aperiam delectus
              libero hic quibusdam. Molestias ipsam fuga aperiam ratione
              pariatur fugiat facilis omnis impedit vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
