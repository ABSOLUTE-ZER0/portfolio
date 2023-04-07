import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setWork } from "../../actions/workActions";
import { Carousel } from "react-bootstrap";

const RecentWork = ({ choice, setWork, work }) => {
  useEffect(() => {
    async function fetchData() {
      setWork(choice);
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice]);

  return (
    <div className='rw'>
      <h1 className='rw__title titleStyle5'>
        <span>Recent&thinsp;</span>&thinsp;Work
      </h1>
      <Carousel>
        {work.works &&
          work.works.map((item, index) => (
            <Carousel.Item className="rw__carousel" key={index}>
              <img
                className='d-block rw__carousel-img'
                onClick={()=>{item.url && window.open(`${item.url}`)}}
                src={
                  item.img &&
                  `data:${item.img.contentType};base64,${Buffer.from(
                    item.img.data.data
                  ).toString("base64")}`
                }
                alt='First slide'
              />
              <Carousel.Caption>
                <h3 className="rw__carousel-h1">{item.name}</h3>
                <p className="rw__carousel-p">{item.basic_desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

RecentWork.prototype = {
  work: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  work: state.work,
});

export default connect(mapStateToProps, { setWork })(RecentWork);
