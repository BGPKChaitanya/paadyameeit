import React, { Suspense } from "react";

import { Box, Typography } from "@mui/material";
import Loading from "../Loading/Loading";
import ProjectsText from "../../Config/ProjectsText";
import "./projects.css";
import Cards from "./Card";

const projects = () => {
  // function

  return (
    <Suspense fallback={Loading}>
      <Box className="ProjectBox">
        <Box className="ProjectBox2">
          <Typography className="ProjectTitle">What We’ve Delivered</Typography>
          <Typography className="ProjectTitle1">
            It’s our pleasure to share our work and insights with you
          </Typography>
          <Box className="ProjectCon">
            {ProjectsText.map((data, i) => (
              <Cards data={data} i={i} />
            ))}
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
};

export default projects;
