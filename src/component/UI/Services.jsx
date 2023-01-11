import React from "react";
import "../../styles/services.css";
const serviceData = [
  {
    icon: "ri-code-s-slash-line",
    title: "Web Design",
    desc: "discription: Lorem ipsum dolor sit, Dicta atque, nulla qui quod nam eum vel quidem aperiam, sint nesciunt facere neque alias hic! Illo fugiat obcaecati rerum voluptatum fuga!",
  },
  {
    icon: "ri-smartphone-line",
    title: "App Development",
    desc: "discription: Lorem ipsum dolor sit, Dicta atque, nulla qui quod nam eum vel quidem aperiam, sint nesciunt facere neque alias hic! Illo fugiat obcaecati rerum voluptatum fuga!",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "discription: Lorem ipsum dolor sit, Dicta atque, nulla qui quod nam eum vel quidem aperiam, sint nesciunt facere neque alias hic! Illo fugiat obcaecati rerum voluptatum fuga!",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "discription: Lorem ipsum dolor sit, Dicta atque, nulla qui quod nam eum vel quidem aperiam, sint nesciunt facere neque alias hic! Illo fugiat obcaecati rerum voluptatum fuga!",
  },
];
const Services = () => {
  return (
    <section id='service'>
      <div className='container'>
        <div className='services__top-content'>
          <h6 className='subtitle'>Our Services</h6>
          <h2>Save time and manage your business with</h2>
          <h2 className='highlight'>Our best services</h2>
        </div>
        <div className='service_item-wrapper'>
          {serviceData.map((item, index) => (
            <div className='services_item'>
              <span className='service_icon'>
                <i class={item.icon}></i>
              </span>
              <h3 className='service__title'>{item.title}</h3>
              <p className='description'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
