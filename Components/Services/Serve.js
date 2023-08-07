import React from "react";
import "../Services/Serve.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hemu from "../Img/hemu.png";
import he from "../Img/ne.png";
import po from "../Img/po.png";
import namo from "../Img/th.png";
import ty from "../Img/ty.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Serve = () => {
    return ( <
        div className = "ok" >
        <
        span > My Recent Project - < /span>{" "} <
        Swiper pagination = { true }
        modules = {
            [Pagination] }
        className = "mySwiper" >
        <
        SwiperSlide > { " " } <
        img src = { hemu }
        alt = "" / > { " " } <
        /SwiperSlide>{" "} <
        SwiperSlide > { " " } <
        img src = { he }
        alt = "" / > { " " } <
        /SwiperSlide>{" "} <
        SwiperSlide > { " " } <
        img src = { po }
        alt = "" / >
        <
        /SwiperSlide>{" "} <
        SwiperSlide > { " " } <
        img src = { namo }
        alt = "" / > { " " } <
        /SwiperSlide>{" "} <
        SwiperSlide > { " " } <
        img src = { ty }
        alt = "" / > { " " } <
        /SwiperSlide>{" "} <
        SwiperSlide > < /SwiperSlide> <SwiperSlide> Slide 7 </SwiperSlide > { " " } <
        SwiperSlide > Slide 8 < /SwiperSlide>{" "} <
        SwiperSlide > Slide 9 < /SwiperSlide>{" "} <
        /Swiper>{" "} <
        /div>
    );
};

export default Serve;