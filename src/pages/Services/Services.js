import React from "react";

import { Box, Typography } from "@mui/material";
import uc from "../../ProjectImages/UC.png";
import "./Services.css";

const Services = () => {
  return (
    <Box className="SerBox">
      <Box className="conT2">
        <Box className="conTs">
          <Box component="img" src={uc} sx={{ height: "300px" }}></Box>
          <Typography className="textH">Website under Construction</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
