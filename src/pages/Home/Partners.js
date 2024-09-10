import React from "react";
import "./Partners.css";
import { Box, Divider, Typography } from "@mui/material";
import re from "../../ProjectImages/re.png";
import vi from "../../ProjectImages/vi.png";
import BNR from "../../ProjectImages/BNR.png";
import bs from "../../ProjectImages/bs.png";
import mars from "../../ProjectImages/mars.png";

const partnerList = [re, vi, BNR, bs, mars];

const Partners = () => {
  return (
    <Box
      className="Partner"
      sx={{
        padding: { xs: "none", sm: "none", lg: "50px 135px 25px 135px" },
      }}
    >
      <Box className="parTitle">
        <Typography className="desTitle1">Our Partners</Typography>
        <Divider
          sx={{
            width: "100px",
            border: "2px solid #e68d39",
            borderRadius: "20px",
            margin: "10px",
          }}
        />
      </Box>

      <Box className="parlist">
        {partnerList.map((item) => (
          <Box className="partItem">
            <Box component="img" src={item} sx={{ width: "100px" }}></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
