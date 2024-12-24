import { Box, Typography } from "@mui/material";
import React, { Suspense } from "react";
import Loading from "../Loading/Loading";
import ProjectsText from "../../Config/ProjectsText";

import { useParams } from "react-router-dom";
import "./projects.css";

const Projectitem = () => {
  const { id } = useParams();
  const { image, heading, description } = ProjectsText[id - 1];

  return (
    <Suspense fallback={Loading}>
      <Box className="ProjectBox">
        <Box className="ProjectBox2">
          <Box
            className="ProjectCon"
            sx={{
              backgroundColor: "#20364a !important",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  marginTop: "100px",
                  marginBottom: "30px",
                  width: "100%",
                  color: "#d9954c",
                  fontWeight: "bold",
                  fontSize: { xs: "24px", sm: "24px", md: "30px", lg: "30px" },
                }}
              >
                {heading}
              </Typography>
              <Box
                component="img"
                src={image}
                sx={{
                  width: { xs: "300px", sm: "350px", md: "400px", lg: "500px" },
                  marginBottom: "30px",
                }}
              ></Box>

              {description.map((data) => (
                <Typography
                  sx={{
                    marginBottom: "15px",
                    color: "#fff",
                    textAlign: {
                      xs: "justify",
                      sm: "justify",
                      md: "left",
                      lg: "left",
                    },
                  }}
                >
                  {data}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
};

export default Projectitem;
