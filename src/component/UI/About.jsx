import React from "react";
import "../../styles/about.css";
import about from "../../images/about3.jpg";
const chooseDate = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Delectus amet minus autem aspernatur molestiae quas fuga",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated Team",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Delectus amet minus autem aspernatur molestiae quas fuga",
  },
  {
    icon: "ri-customer-service-line",
    title: "24/7 Support",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Delectus amet minus autem aspernatur molestiae quas fuga",
  },
];
const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='about__wrapper'>
          <div className='about__content'>
            <h6 className='subtitle'>Why Choose Us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className='highlight'>financial challenges</h2>
            <p className='description about__content-desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              neque repellendus facilis nam quibusdam?
            </p>{" "}
            <div className='choose__item-wrapper'>
              {chooseDate.map((item, index) => (
                <div className='choose__us-item'>
                  <span className='choose__us-icon'>
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className='choose__us-title'>{item.title}</h4>
                    <p className='description about__content-des'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='about__img'>
            <img src={about} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
