import React from "react";
import logo from "../../images/logo/logo.png";

const Header = () => {
  const menuToggle = () => {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".header__menu");
    const overlay = document.querySelector(".header__overlay");

    menu.classList.toggle("open");
    header.classList.toggle("open");
    overlay.classList.toggle("open");
  };

  const switchDarkMode = () => {
    let checkbox = document.querySelector('input[name="theme"]');
    let htmlElement = document.documentElement;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "light");
      } else {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "dark");
      }
    });

    let smoothTrans = () => {
      htmlElement.classList.add("transition");

      window.setTimeout(() => {
        htmlElement.classList.remove("transition");
      }, 1000);
    };
  };

  return (
    <div>
      <header className='header'>
        <div onClick={menuToggle} className='header__menu'>
          <div className='header__menu--line'></div>
        </div>

        <div className='header__overlay'></div>

        <nav className='header__nav'>
          <a href='/' className='header__nav--logo'>
            <img src={logo} alt='logo'></img> Absolute Zero
          </a>

          <ul className='header__nav--links'>
            <li className='header__nav--links__item'>
              <a href='/' data-text='Home'>
                Home
              </a>
            </li>

            <li className='header__nav--links__item'>
              <a href='/about' data-text='About'>
                About
              </a>
            </li>

            <li className='header__nav--links__item'>
              <a href='/work' data-text='Work'>
                Work
              </a>
            </li>

            <li className='header__nav--links__item'>
              <a href='./contact' data-text='Contact'>
                Contact
              </a>
            </li>

            <div className='header__nav--links__toggle-container'>
              <input
                onClick={switchDarkMode}
                type='checkbox'
                id='toggle'
                name='theme'
              />
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
