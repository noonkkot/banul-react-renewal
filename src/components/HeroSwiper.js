import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import '../App.css';


export default function HeroSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        rewind={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={process.env.PUBLIC_URL + 'images/heroswiper01.jpg'} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + 'images/heroswiper02.jpg'} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + 'images/heroswiper03.jpg'} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + 'images/heroswiper04.jpg'} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + 'images/heroswiper05.jpg'} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + 'images/heroswiper06.jpg'} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
