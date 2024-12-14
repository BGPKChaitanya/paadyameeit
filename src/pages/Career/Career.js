import React, { Suspense, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import uc from "../../ProjectImages/UC.png";
import "./Career.css";
import CareerText from "../../Config/career";
import deal from "../../ProjectImages/deal.png";
import bg1 from "../../ProjectImages/companyculture.jpeg";
import bg2 from "../../ProjectImages/teamcoloboration.jpg";
import bg3 from "../../ProjectImages/employeedevelopment.jpg";
import bg4 from "../../ProjectImages/office.webp";
import bg5 from "../../ProjectImages/employeerecognition.png";
import bg6 from "../../ProjectImages/work.webp";
import Loading from "../Loading/Loading";
import { RingLoader } from "react-spinners";

const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6];

const Career = () => {
  const [isHovered, setIsHovered] = useState(0);

  const handleMouseEnter = (i) => {
    setIsHovered(i);
  };

  const handleMouseLeave = (i) => {
    setIsHovered(i);
  };

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RingLoader color="#058037" />
        </div>
      }
    >
      <Box className="carBox">
        <Box className="conT2">
          <Typography className="careerTitle">
            Become a Part of Our Team
          </Typography>
          <Typography className="careerTitle1">
            Why Join Us? Here’s What You’ll Enjoy
          </Typography>
          <Box className="careercon">
            <Box className="illustrationBox">
              <Box className="ilbox1">
                {CareerText.textArray.map((i) => (
                  <Box
                    sx={{
                      backgroundImage: `url(${bgImages[i.id - 1]})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Box
                      className={isHovered === i.id ? "itemboxX1" : "itembox1"}
                      onMouseEnter={() => handleMouseEnter(i.id)}
                      onMouseLeave={() => handleMouseLeave(0)}
                    >
                      <Typography className="tit">{i.title}</Typography>
                      {isHovered === i.id && (
                        <Typography className="titdes">{i.des}</Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
              {/* <Box className="ilbox2">
              <Box component="img" src={deal} className="deal"></Box>
            </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
};

export default Career;
