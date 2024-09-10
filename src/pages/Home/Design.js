import React from "react";
import "./Design.css";
import { Box, Divider, Typography } from "@mui/material";
import understand from "../../ProjectImages/understand.png";
import design from "../../ProjectImages/design.png";
import code from "../../ProjectImages/code.png";
import development from "../../ProjectImages/development.png";
import interaction from "../../ProjectImages/interaction.png";
import DESIGNText from "../../Config/Design";

const Design = () => {
  return (
    <Box className="desCon">
      <Box
        sx={{
          padding: { xs: "none", sm: "none", lg: "50px 135px 25px 135px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography className="desTitle1">Way of Building</Typography>
        <Typography className="desTitle">Great Software</Typography>
        <Divider
          sx={{
            width: "100px",
            border: "2px solid #e68d39",
            borderRadius: "20px",
            margin: "10px",
          }}
        />
      </Box>
      <Box className="destextCon">
        <Box className="destext">
          <Box sx={{ height: "100%" }} component="img" src={understand}></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography className="txt1">
              {DESIGNText.UNDERSTAND_TITLE}
            </Typography>
            <Typography className="txt2">{DESIGNText.UNDERSTAND}</Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            component="img"
            src={design}
          ></Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography className="txt1 txt12">
              {DESIGNText.DESIGN_TITLE}
            </Typography>
            <Typography className="txt2 txt12">{DESIGNText.DESIGN}</Typography>
          </Box>
          {/* <Box sx={{ border: "5px solid red" }}></Box> */}
          <Box
            sx={{
              height: "100%",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
            component="img"
            src={design}
          ></Box>
          <Box sx={{ height: "100%" }} component="img" src={code}></Box>
          {/* <Box sx={{ border: "5px solid red" }}></Box>
          <Box sx={{ border: "5px solid red" }}></Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography className="txt1">{DESIGNText.CODE_TITLE}</Typography>
            <Typography className="txt2">{DESIGNText.CODE}</Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            component="img"
            src={development}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography className="txt1 txt12">
              {DESIGNText.DEPLOYMENT_TITLE}
            </Typography>
            <Typography className="txt2 txt12">
              {DESIGNText.DEPLOYMENT}
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
            component="img"
            src={development}
          ></Box>
          <Box sx={{ height: "100%" }} component="img" src={interaction}></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography className="txt1">{DESIGNText.USERS_TITLE}</Typography>
            <Typography className="txt2">{DESIGNText.USERS}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Design;
