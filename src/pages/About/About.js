import React from "react";
import { Box, Typography } from "@mui/material";
import Company from "../../ProjectImages/reserve.gif";
import "./About.css";
import ABOUTUS_TEXT from "../../Config/AbouText";

const About = () => {
  return (
    <Box className="con">
      <Box className="con2">
        <Box className="abouts">
          <Typography className="aboutus">About Us</Typography>
          <Box className="abtdes">
            <Box className="abtdes1">
              <Box
                component="img"
                src={Company}
                alt="company"
                sx={{ height: { xs: "200px", sm: "200px", lg: "350px" } }}
              ></Box>
            </Box>

            <Box className="abtdes2">
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                {ABOUTUS_TEXT.ABT1}
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                {ABOUTUS_TEXT.ABT2}
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                {ABOUTUS_TEXT.ABT3}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
