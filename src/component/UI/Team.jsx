import React from "react";
import "../../styles/team.css";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
const Team = () => {
  return (
    <div className='container'>
      <div className='team__content'>
        <h6 className='subtitle'>Our Team</h6>
        <h2>
          Meet with <span className='highlight'></span>
        </h2>
      </div>
      <div className='team__wrapper'>
        <div className='team__item'>
          <div className='team__img'>
            <img src={user1} alt='' />
          </div>
          <div className='team__details'>
            <h4>Milkessa Gebi</h4>
            <p className='description'>CEO and Founder</p>
            <div className='team__member-social'>
              <span>
                <i class='ri-linkedin-fill'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
