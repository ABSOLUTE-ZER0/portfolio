import React, { useEffect } from "react";
import Header from "../layout/Header";
import me from "../../images/home/me.png";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const scroll = document.querySelector(".scroll");

    window.addEventListener("scroll", () => {
      scroll.classList.toggle("active", window.scrollY > 200);
    });

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    scroll.addEventListener("click", () => {
      scrollToTop();
    });
  }, []);

  return (
    <div>
      <Header page='home' />
      <div className='home'>
        <div id='home-back' className='home__background'>
          <div className='div1'>
            <h1 className='name titleStyle3'>
              Sri Charan<br></br>Thummala
            </h1>
          </div>
          <div className='div2'>
            <h5 className='title titeStyle2'>Jack of all trades</h5>
            <h3 className='subtitle'>
              I'm a full stack developer and data scientist
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
            <div className="links">
            <Link to='/contact'>
              Get in touch
            </Link>
            </div>
          </div>
          <img src={me} alt='me'></img>
        </div>
        <div className='scroll'></div>
      </div>
    </div>
  );
};

export default Home;
