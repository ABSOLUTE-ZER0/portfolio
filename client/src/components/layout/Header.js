import React, { useEffect } from "react";
import logo from "../../images/logo/logo.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setTheme } from "../../actions/homeActions";

const Header = ({ page, setTheme }) => {
  useEffect(() => {
    const scroll = document.querySelector(".scroll");
    const headerElement = document.querySelector(".header");
    let test = 0;

    window.addEventListener("scroll", () => {
      const currentscrollPosY = window.scrollY;
      checkScrollTop(currentscrollPosY);
      scroll.classList.toggle("active", currentscrollPosY > 200);
    });

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    function checkScrollTop(currentscrollPosY) {
      if (currentscrollPosY === 0) {
        window.setTimeout(() => {
          headerElement.classList.remove("active");
          headerElement.classList.remove("hidden");
          headerElement.classList.remove("moveUp");
        }, 200);
      } else if (currentscrollPosY > 110) {
        headerElement.classList.add("moveUp");
        if (currentscrollPosY < test) {
          headerElement.classList.add("active");
          headerElement.classList.remove("hidden");
        } else if (
          currentscrollPosY > test &&
          headerElement.classList.contains("active")
        ) {
          headerElement.classList.remove("active");
          headerElement.classList.add("hidden");
        }
      }
      test = currentscrollPosY;
    }

    scroll.addEventListener("click", () => {
      scrollToTop();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("currentTheme") === "light") {
      setLightMode(false);
    } else {
      setDarkMode(false);
    }
    setTheme();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let htmlElement = document.documentElement;
  const menuToggle = () => {
    const header = document.querySelector(".header");
    const menu = document.querySelector(".header__menu");
    const overlay = document.querySelector(".header__overlay");

    htmlElement.classList.toggle("noscroll");
    menu.classList.toggle("open");
    header.classList.toggle("open");
    overlay.classList.toggle("open");
  };

  let smoothTrans = () => {
    htmlElement.classList.add("transition");

    window.setTimeout(() => {
      htmlElement.classList.remove("transition");
    }, 1000);
  };

  const setLightMode = (trans = true) => {
    let checkbox = document.querySelector('input[name="theme"]');
    checkbox.checked = false;
    localStorage.setItem("currentTheme", "light");

    if (trans) {
      smoothTrans();
    }
    htmlElement.setAttribute("data-theme", "light");
  };

  const setDarkMode = (trans = true) => {
    let checkbox = document.querySelector('input[name="theme"]');
    checkbox.checked = true;
    localStorage.setItem("currentTheme", "dark");

    if (trans) {
      smoothTrans();
    }
    htmlElement.setAttribute("data-theme", "dark");
  };

  const toggleTheme = () => {
    setTheme();
    const currentTheme = localStorage.getItem("currentTheme");
    if (currentTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
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
                color: page === "blog" && "var(--color-active)",
                fontWeight: page === "blog" && "700",
              }}
              href='https://www.abslzero.in'
              target='blank'
              data-text='Blog'>
              Blog
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
              onClick={toggleTheme}
              type='checkbox'
              id='toggle'
              name='theme'
            />
          </div>
        </ul>
      </nav>
    </header>
  );
};

Header.prototype = {
  home: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, { setTheme })(Header);
