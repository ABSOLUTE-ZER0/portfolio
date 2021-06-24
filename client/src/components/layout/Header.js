import React from "react";
import logo from "../../images/logo/logo.png";

const Header = ({ page }) => {
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
    const background = document.getElementById("home-back");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "light");
        background.setAttribute("data-theme", "light");
      } else {
        smoothTrans();
        htmlElement.setAttribute("data-theme", "dark");
        background.setAttribute("data-theme", "dark");
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
              <a
                style={{
                  color: page === "home" && "var(--color-active)",
                  fontWeight: page === "home" && "700",
                }}
                href='/'
                data-text='Home'>
                Home
              </a>
            </li>

            <li className='header__nav--links__item'>
              <a
                style={{
                  color: page === "about" && "var(--color-active)",
                  fontWeight: page === "about" && "700",
                }}
                href='/about'
                data-text='About'>
                About
              </a>
            </li>

            <li className='header__nav--links__item'>
              <a
                style={{
                  color: page === "work" && "var(--color-active)",
                  fontWeight: page === "work" && "700",
                }}
                href='/work'
                data-text='Work'>
                Work
              </a>
            </li>

            <li className='header__nav--links__item'>
              <a
                style={{
                  color: page === "contact" && "var(--color-active)",
                  fontWeight: page === "contact" && "700",
                }}
                href='./contact'
                data-text='Contact'>
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
