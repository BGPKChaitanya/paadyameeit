import React, { Suspense } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Company from "../../ProjectImages/reserve.gif";
import "./About.css";
import "../Services/Services.css";
import ABOUTUS_TEXT from "../../Config/AbouText";
import Loading from "../Loading/Loading";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { IoTelescope } from "react-icons/io5";

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Box className="con">
        <Box className="con2">
          <Typography className="aboutus">About PAADYAMEE IT</Typography>
          <Box className="abouts">
            <Box className="abtdes">
              <Box className="abtdes1">
                <Box
                  component="img"
                  src={Company}
                  alt="company"
                  sx={{
                    height: { xs: "200px", sm: "200px", lg: "350px" },
                  }}
                ></Box>
              </Box>

              <Box className="abtdes2">
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                  }}
                >
                  {ABOUTUS_TEXT.ABT1}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                  }}
                >
                  {ABOUTUS_TEXT.ABT2}
                </Typography>
                {/* <br /> */}
                {/* <Typography
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
                </Typography> */}
              </Box>
            </Box>
            <Box className="abouts1">
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                  padding: "10px 0 10px 0",
                }}
              >
                {ABOUTUS_TEXT.ABT3}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                  padding: "10px 0 10px 0",
                }}
              >
                {ABOUTUS_TEXT.ABT4}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                  padding: "10px 0 10px 0",
                }}
              >
                {ABOUTUS_TEXT.ABT5}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "#0a3833", padding: "30px 0 30px 0" }}>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                className="techStacktitle"
                sx={{ textAlign: "center", color: "#FFFFFF" }}
              >
                Our Mission
              </Typography>
              <Divider className="divider" variant="middle"></Divider>
            </Box>
            <Box className="abtdes">
              <Box className="abtdes1">
                <RocketLaunchIcon
                  sx={{ fontSize: "300px", color: "#FFFFFF" }}
                />
              </Box>

              <Box className="abtdes2">
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                    color: "#FFFFFF",
                  }}
                >
                  {ABOUTUS_TEXT.MISSION1}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                    color: "#FFFFFF",
                  }}
                >
                  {ABOUTUS_TEXT.MISSION2}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                    color: "#FFFFFF",
                  }}
                >
                  {ABOUTUS_TEXT.MISSION3}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "30px 0 30px 0" }}>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                className="techStacktitle"
                sx={{ textAlign: "center", color: "#FFFFFF" }}
              >
                Our Vision
              </Typography>
              <Divider className="divider" variant="middle"></Divider>
            </Box>
            <Box className="abtdes">
              <Box className="abtdes1">
                <IoTelescope size="250px" color="#FFFFFF" />
              </Box>

              <Box className="abtdes2">
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                    color: "#FFFFFF",
                  }}
                >
                  {ABOUTUS_TEXT.VISSION1}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                    color: "#FFFFFF",
                  }}
                >
                  {ABOUTUS_TEXT.VISSION2}
                </Typography>
                <br />
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "15px", lg: "18px" },
                    textAlign: "justify",
                    color: "#FFFFFF",
                  }}
                >
                  {ABOUTUS_TEXT.VISSION3}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
};

export default About;
