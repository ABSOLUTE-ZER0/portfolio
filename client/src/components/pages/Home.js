import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Skills from "../layout/Skills";
import RecentWork from "../layout/RecentWork";
import me from "../../images/home/me.png";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Home = () => {
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

  const [choice, setChoice] = useState("web");

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
              Aspiring to become proficient in every field related to
              development. Web development is what I have started my journey
              with and am currently persuring my BTech course in Computer
              Engineering. Mobile and PC game devloping using Unreal Engine 4 is
              my current bourne.
            </p>
            <p className='phone'>P: +91 6300 499 255</p>
            <p className='email'>E: sricharan.zero@gmail.com</p>
            <div className='links'>
              <Link to='/contact'>Get in touch</Link>
            </div>
          </div>
          <img src={me} alt='me'></img>
        </div>

        <div className='home__worktypes'>
          <div className='home__worktypes-choice'>
            <button
              onClick={async () => {
                setChoice("web");
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
                setChoice("app");
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
                setChoice("game");
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
                setChoice("ds");
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

export default Home;
