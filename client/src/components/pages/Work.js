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
        <h1 className='titleStyle5'>Some of my work</h1>
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
                  {item.app_desc.map((desc, i) => (
                    <p>{desc}</p>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
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
