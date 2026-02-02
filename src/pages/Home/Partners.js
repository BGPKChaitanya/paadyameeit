import React from "react";
import "./Partners.css";
import { Box, Divider, Typography } from "@mui/material";
import re from "../../ProjectImages/re.png";
import vi from "../../ProjectImages/vi.png";
import BNR from "../../ProjectImages/BNR.png";
import bs from "../../ProjectImages/bs.png";
import mars from "../../ProjectImages/4.png";
import intellimart from "../../ProjectImages/1.png";
import snr from "../../ProjectImages/2.png";
import secure from "../../ProjectImages/3.png";
import prime from "../../ProjectImages/5.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slick from "./Slick";

const partnerList = [ mars, vi, snr, prime, BNR, secure, bs, re];

const Partners = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Box
      className="Partner"
      // sx={{
      //   padding: { xs: "none", sm: "none", lg: "50px 135px 25px 135px" },
      // }}
    >
      <Box className="parTitle">
        <Typography sx={{ textAlign: "center", fontSize: "25px" }}>
          Our Partners
        </Typography>
        <Divider
          sx={{
            width: "100px",
            border: "2px solid #e68d39",
            borderRadius: "20px",
            margin: "10px",
          }}
        />
      </Box>

      <Slick />
    </Box>
  );
};

export default Partners;
