import React, { useEffect } from "react";
import Header from "../layout/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAllWork } from "../../actions/workActions";
import Loader from "../layout/Loader";

const Work = ({ work, setAllWork }) => {
  useEffect(() => {
    async function fetchData() {
      setAllWork();
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header page='work' />
      <div className='work container'>
      <h1 className="titleStyle5">Some of my work</h1>
        <div className='work__card'>
          {work.loading ? (
            <Loader />
            ) : (
          work.works &&
            work.works.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `item.img` }}
                className='work__card-single box-shadow-1'>
                <img
                  className='d-block work__card-single-image'
                  onClick={() => {
                    item.url && window.open(`${item.url}`);
                  }}
                  src={
                    item.img &&
                    `data:${item.img.contentType};base64,${Buffer.from(
                      item.img.data.data
                    ).toString("base64")}`
                  }
                  style={{ height: item.showcase === "app" && "50rem" }}
                  alt='work-images'
                />
                <h2>{item.name}</h2>
                <div className='work__card-single-details'>
                  <h4>Description</h4>
                  {item.app_desc.map((desc,i) => (
                    <p>{desc}</p>
                  ))}
                </div>
              </div>
            )))}
        </div>
        <h1 style={{marginBottom: "5rem"}} className="titleStyle5">My journey so far(Boring Stuff) </h1>
        <p>
          I wrote my first coding in 2019. The concept of programming and
          algorithms intrigued me to the point that I learnt 3 major programming
          languages(python, c, JAVA) in 1 month.
        </p>
        <p>
          After completing many algorithms on HackerRank I moved to ML.I learnt
          how to use Anaconda, few ML libraries, plotting data etc.
        </p>
        <p>
          After that, I did a little bit of AI and wrote a code for a car that
          can navigate itself avoiding obstacles in a game.
        </p>
        <p>
          I started web development in 2020 and of course, my starting Webpages
          were trashy, there lacked the appeal that I imagined.So I learnt SCSS
          that in turn made me way better in CSS.
        </p>
        <p>
          I wanted to apply for an Internship at this point.I applied for
          everything without reading the description, and I got a couple of good
          internships but as it was my first one, I wanted to get familiarized
          with the work and environment.I like to be over - qualified than under
          - qualified.
        </p>
        <p>
          I got selected for a VueJS Internship for 7 k.The pay was low but I
          wanted the experience so it didn 't matter. I didn' t even know Vue
          but I was asked to complete assessment work on Vue and submit it
          within 2 days.I learnt Vue in a couple of hours and finished my work
          in a day.I got selected.But it didn 't last long, I was asked to work
          a lot, I was given an entire website and had to do that all alone with
          no help whatsoever.
        </p>
        <p>
          It didn 't bother me much, I finished the work then I was given
          another website, I finished that but then they refused to pay for the
          second month, citing Covid Loss and all.So I quit and didn 't even
          bother about the certificate as I finished the work, I got the
          experience.
        </p>
        <p>
          I had to learn ReactJS for my college project.I made my team stand
          down and completed the project alone as I wanted to get more
          experience.My professor like them soo much that he offered to talk to
          the management to let me use their Library API for my website.
        </p>
        <p>
          In mid - 2021, my dad complained about how his mail server was soo
          slow and if there was anything I could do.This got me wondering how
          website hosting and emails servers works, I have done a little
          research and started my very own server in 2021.
        </p>
        <p>
          With this, my dad is my very first client!Creating a server alone was
          hard, but a mail server was a real pain in the ass.There are soo many
          restrictions everywhere.I was finally able to create my very own mail
          server after using PORT 465. I got a score of 10 / 10 on mail tester.I
          was never soo happy for full marks before.
        </p>
        <p>
          After creating my server, I wanted to create a blog.I read how most of
          the websites on the Internet are created using WordPress.Now I started
          learning WordPress.
        </p>
        <p>
          When I learn something I never do it half - assed.So I learned
          everything I could in a week.Now I am a WordPress developer.I can
          create themes, plugins.
        </p>
      </div>
      <div className='scroll'> </div>
    </div>
  );
};

Work.prototype = {
  work: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  work: state.work,
});

export default connect(mapStateToProps, {
  setAllWork,
})(Work);
