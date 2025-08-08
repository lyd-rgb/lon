import React from 'react';
import './ContactMe.css';
import { Button } from 'antd';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slide1, { Slide2, Slide3, Slide4 } from "./components1/Slide1.js";
import { ArrowDownOutlined } from '@ant-design/icons';
import { ArrowUpOutlined } from '@ant-design/icons';

function ContactMe() {
  return (
    <div className="App">
      <Swiper
        direction="vertical"
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide className="slide slide-content color1"><Slide1 /></SwiperSlide>
        <SwiperSlide className="slide slide-content color2"><Slide2 /></SwiperSlide>
        <SwiperSlide className="slide slide-content color3"><Slide3 /></SwiperSlide>
        <SwiperSlide className="slide slide-content color4"><Slide4 /></SwiperSlide>
      </Swiper>
      <Button className="button1" onClick={() => {
        document.querySelector(".mySwiper").swiper.slideNext();
      }} icon={<ArrowDownOutlined />}></Button>

      <Button className="button2"
        onClick={() => {
          document.querySelector(".mySwiper").swiper.slidePrev();
         }}
        icon={<ArrowUpOutlined />}></Button>
    </div>
  );
}

export default ContactMe;