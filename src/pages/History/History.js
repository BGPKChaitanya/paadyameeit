import { Box, Typography } from "@mui/material";
import React from "react";
import { Chrono } from "react-chrono";
import "../About/About";
import { ClassNames } from "@emotion/react";

const History = () => {
  const items = [
    {
      title: "2019",
      cardTitle:
        "Incorporation of Paadyamee IT Solutions Pvt Ltd - Aadhaar Services",

      // cardSubtitle:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
      // cardDetailedText:
      //   "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "2020",
      cardTitle: "IT Development",
    },
    {
      title: "2021",
      cardTitle: "E Governance Project",
    },

    {
      title: "2022",
      cardTitle: "IT Services and Maintainance",
    },
    {
      title: "2024",
      cardTitle: "Smart Meter Project",
    },
  ];

  return (
    <Box className="con">
      <Box className="con2">
        <Typography className="aboutus">Our History</Typography>
        <div
          style={{
            width: "100%",
            height: "100%",
            // marginTop: "110px",
            // marginBottom: "150px",
            zIndex: "0",
            background: "white",
          }}
        >
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={items}
            disableToolbar="true"
            showAllCardsHorizontal="true"
            slideShow="true"
            textDensity="LOW"
          />
        </div>
      </Box>
    </Box>
  );
};

export default History;
