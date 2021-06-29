import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setWork } from "../../actions/workActions";
import { Carousel } from "react-bootstrap";

const RecentWork = ({ setWork, work }) => {
  useEffect(() => {
    async function fetchData() {
      setWork();
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='rw'>
      <Carousel>
        {work.works &&
          work.works.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className='d-block w-100'
                src={item.img && `data:${item.img.contentType};base64,${Buffer.from(item.img.data.data).toString('base64')}`}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
