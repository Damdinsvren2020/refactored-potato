import React from "react";
import Slider from "react-slick";
import "./home_Carousel.css";

const Home_Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="banner-c">
        <Slider {...settings}>
          <div className="banner">
            <img src="https://citycomputer.mn/wp-content/uploads/2022/04/logo-1.png" />
          </div>
          <div className="banner">
            <img src="https://citycomputer.mn/wp-content/uploads/2022/08/298550667_2423762791107461_7357459049320378064_n-2048x712.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home_Carousel;
