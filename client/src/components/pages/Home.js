import React, { useEffect } from "react";
import Header from "../layout/Header";

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
      <Header />
      <div>
        <div className='scroll'></div>
      </div>
    </div>
  );
};

export default Home;
