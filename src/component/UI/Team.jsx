import React from "react";
import "../../styles/team.css";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
const userData = [
  {
    imgUrl: user1,
    name: "Milkessa Gebi",
    position: "CEO and Fouder",
  },
  {
    imgUrl: user2,
    name: "John Doe",
    position: "Web Developer",
  },
  {
    imgUrl: user1,
    name: "Milkessa Gebi",
    position: "CEO and Fouder",
  },
  {
    imgUrl: user2,
    name: "John Doe",
    position: "Web Developer",
  },
];
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
        {userData.map((item, index) => (
          <div className='team__item'>
            <div className='team__img'>
              <img src={item.imgUrl} alt='' />
            </div>
            <div className='team__details'>
              <h4>{item.name}</h4>
              <p className='description'>{item.position}</p>
              <div className='team__member-social'>
                <span>
                  <i class='ri-linkedin-line'></i>
                </span>
                <span>
                  <i class='ri-instagram-line'></i>
                </span>
                <span>
                  <i class='ri-twitter-line'></i>
                </span>
                <span>
                  <i class='ri-github-line'></i>
                </span>
                <span>
                  <i class='ri-facebook-line'></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
