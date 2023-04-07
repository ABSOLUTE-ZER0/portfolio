import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Skills from "../layout/Skills";
import RecentWork from "../layout/RecentWork";
import me from "../../images/home/me.png";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ home }) => {
  const [choice, setChoice] = useState("web");
  const [currenttheme, setCurrenttheme] = useState(home.theme);

  useEffect(() => {
    if (currenttheme === "light") {
      setLightMode();
    } else {
      setDarkMode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeChoice = (type) => {
    setChoice(type);

    const currentSlide = document.querySelector(".carousel-item");
    currentSlide && currentSlide.classList.add("active");
  };

  const setLightMode = () => {
    setCurrenttheme("light");
    const background = document.getElementById("home-back");
    background.setAttribute("data-theme", "light");
  };

  const setDarkMode = () => {
    setCurrenttheme("dark");
    const background = document.getElementById("home-back");
    background.setAttribute("data-theme", "dark");
  };

  if (localStorage.getItem("currentTheme") !== currenttheme) {
    if (localStorage.getItem("currentTheme") === "light") {
      setLightMode();
    } else {
      setDarkMode();
    }
  }

  return (
    <div className='container-custom'>
      <Header page='home' />
      <div className='home'>
        <div id='home-back' className='home__background'>
          <div className='div1'>
            <h1 className='name titleStyle3'>
              Sri Charan<br></br>Thummala
            </h1>
          </div>
          <div className='div2'>
            <h5 className='title titleStyle2'>Jack of all trades</h5>
            <h3 className='subtitle'>
              I'm full stack developer and data scientist
            </h3>
            <p className='desc'>
              Currently working at Merkle SG as a Data and Analytics Strategy
              Executive. Proficient in most of the fields related to Computer
              Science and aim to become an expert in all. Started my journey
              with Web Development and currently pursuing Game Development using
              Unreal Engine 5
            </p>
            <p className='phone'>P: +91 6300 499 255</p>
            <p className='email'>E: sricharan@abslzero.in</p>
            <div className='links'>
              <Link to='/contact'>Get in touch</Link>
            </div>
          </div>
          {/* <img src={me} alt='me'></img> */}
        </div>

        <div className='home__worktypes'>
          <div className='home__worktypes-choice'>
            <button
              onClick={async () => {
                changeChoice("web");
              }}
              className={classNames("home__worktypes-choice-button", {
                active: choice === "web",
              })}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className='fas fa-laptop-code'></i>
              <p>Full Stack</p>
            </button>
            <button
              onClick={async () => {
                changeChoice("app");
              }}
              className={classNames("home__worktypes-choice-button", {
                active: choice === "app",
              })}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className='fas fa-mobile-alt'></i>
              <p>App</p>
            </button>
            <button
              onClick={async () => {
                changeChoice("game");
              }}
              className={classNames("home__worktypes-choice-button", {
                active: choice === "game",
              })}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className='fas fa-gamepad'></i>
              <p>Game</p>
            </button>
            <button
              onClick={async () => {
                changeChoice("ds");
              }}
              className={classNames("home__worktypes-choice-button", {
                active: choice === "ds",
              })}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i className='fas fa-robot'></i>
              <p>Data Science</p>
            </button>
          </div>
        </div>
      </div>
      <Skills choice={choice} />
      <RecentWork choice={choice} />
      <div className='scroll'></div>
    </div>
  );
};

Home.prototype = {
  home: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, {})(Home);
