import React from "react";
import Slider from "react-slick";

import re from "../../ProjectImages/re.png";
import vi from "../../ProjectImages/vi.png";
import BNR from "../../ProjectImages/BNR.png";
import bs from "../../ProjectImages/bs.png";
import mars from "../../ProjectImages/4-1.png";
import intellimart from "../../ProjectImages/1.png";
import snr from "../../ProjectImages/2.png";
import secure from "../../ProjectImages/3-1.png";
import prime from "../../ProjectImages/5.webp";

import "./Partners.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const partnerList = [mars, vi, snr, prime, BNR, secure, bs, re];

const Slick = () => {
  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    autoplay: true,
    autoplayspeed: 10,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Max width 1024px
        settings: {
          slidesToShow: 5, // Show 2 slides
          slidesToScroll: 2, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // Max width 768px
        settings: {
          slidesToShow: 4, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Max width 480px
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="slickContainer">
      <Slider {...settings}>
        {partnerList.map((item) => (
          <Box className="partItem">
            <img src={item} className="styleImage"></img>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
