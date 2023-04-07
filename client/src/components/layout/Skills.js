import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSkills } from "../../actions/homeActions";
import Loader from "../layout/Loader";

const Skills = ({ choice, home, setSkills }) => {
  useEffect(() => {
    if (choice) {
      if (choice === "web") {
        setPage("Full Stack Web Development");
      }
      if (choice === "app") {
        setPage("Android App Development");
      }
      if (choice === "game") {
        setPage("Game Development");
      }
      if (choice === "ds") {
        setPage("Data Science");
      }
    }
    return () => {
      setPage(null);
    };
  }, [choice]);

  useEffect(() => {
    async function fetchData() {
      setSkills(choice);
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice]);

  const [page, setPage] = useState("Full Stack Web Development");

  return (
    <div className='skills'>
      <div className='skills__title'>
        <h1 className='titleStyle1'>{page}</h1>
      </div>
      <div className='skills__myskills'>
        <h1 className='titleStyle5'>
          <span>My&thinsp;</span>&thinsp;Skills
        </h1>
        <div>
          {home.loading ? (
            <Loader />
          ) : (
            home.skills &&
            home.skills.map((skill, index) => (
              <div className='skill' key={index}>
                <h3 className='name'>{skill.name}</h3>
                <img src={skill.img_path} alt='img'></img>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

Skills.prototype = {
  home: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  home: state.home,
});

export default connect(mapStateToProps, { setSkills })(Skills);
