import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      button : false,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      autoplaySpeed: 4000,
      speed : 1000
    };
    return (
      <div id="hd_slider">
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + 'images/slider01.jpg'} alt="50% 할인 이벤트" />
          </div> 
          <div>
            <img src={process.env.PUBLIC_URL + 'images/slider02.jpg'} alt="봉사활동" />
          </div>
        </Slider>
      </div>
    );
  }
}