import React from "react";
import "./header.css";
const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blog",
    display: "Blog",
  },
  {
    path: "#contact",
    display: "Contact US",
  },
];

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='nav__wrapper'>
          <div className='logo'>
            <h2>Nubeyna</h2>
          </div>

          {/*====Navigation=======*/}
          <div className='navigation'>
            <ul className='menu'>
              {nav__links.map((item, index) => (
                <li className='menu__item'>
                  <a href='item.path' className='menu__link'>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/*====Light Mode=======*/}
          <div className='light__mode'>
            <span>
              <i className='ri-sun-line'> Light Mode</i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
