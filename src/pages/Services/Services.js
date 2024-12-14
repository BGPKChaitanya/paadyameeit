import React, { Suspense, useState } from "react";

import { Box, Button, Divider, Typography } from "@mui/material";
import UI from "../../ProjectImages/UI.png";
import Team from "../../ProjectImages/Team.png";
import ServicesText from "../../Config/Services";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import laptop from "../../ProjectImages/laptop.png";
import mobile from "../../ProjectImages/mobile.png";
import bug from "../../ProjectImages/bug.png";
import UIDesign from "../../ProjectImages/UIDesign.png";
import react from "../../ProjectImages/techstack/logo512.png";
import vue from "../../ProjectImages/techstack/vue.webp";
import javas from "../../ProjectImages/techstack/js.png";
import mongo from "../../ProjectImages/techstack/Mongo.png";
import nginix from "../../ProjectImages/techstack/nginix.png";
import android from "../../ProjectImages/techstack/android.png";
import postgresql from "../../ProjectImages/techstack/PostgreSQL.png";
import angular from "../../ProjectImages/techstack/angular.png";
import django from "../../ProjectImages/techstack/dj.png";
import node from "../../ProjectImages/techstack/node.png";
import mysql from "../../ProjectImages/techstack/mysql.webp";
import apple from "../../ProjectImages/techstack/apple.png";
import tcss from "../../ProjectImages/techstack/tcss.png";
import "./Services.css";
import Loading from "../Loading/Loading";

const Services = () => {
  const [screenNum, setScreen] = useState(0);
  const techStack = [
    react,
    vue,
    angular,
    javas,
    android,
    apple,
    node,
    django,
    mysql,
    postgresql,
    mongo,
    nginix,
    tcss,
  ];
  return (
    <Suspense fallback={<Loading />}>
      <Box className="SerBox">
        <Box className="conT22">
          <Typography className="serviceTitle">
            We Provide The Best Services
          </Typography>
          <Typography className="serviceTitle1">
            Explore our service offerings by picking an option
          </Typography>
          <Box className="conTss">
            <Button className="serCont" onClick={() => setScreen(0)}>
              <Box component="img" src={UI} className="img"></Box>
              <Typography className="serContent">UID Services</Typography>
            </Button>
            <Button className="serCont" onClick={() => setScreen(1)}>
              <Box component="img" src={Team} className="img"></Box>
              <Typography className="serContent">
                Software Development Services
              </Typography>
            </Button>
          </Box>

          {screenNum === 0 && (
            <Box
              className="UIDCont"
              sx={{
                padding: { sx: "none", lg: "25px 135px 25px 135px" },
              }}
            >
              <Typography className="serContent1">
                {ServicesText.UIDdes1}
              </Typography>
              <Box className="UIDitems">
                <Box className="UID1">
                  <AddBusinessIcon
                    sx={{ fontSize: "75px", color: "#914f10" }}
                  />
                  <Typography className="UI1">{ServicesText.EC}</Typography>
                  <Typography className="UI2">{ServicesText.ECdes}</Typography>
                </Box>
                <Box className="UID1">
                  <FingerprintOutlinedIcon
                    sx={{ fontSize: "75px", color: "#914f10" }}
                  />
                  <Typography className="UI1">{ServicesText.BD}</Typography>
                  <Typography className="UI2">{ServicesText.BDdes}</Typography>
                </Box>
                <Box className="UID1">
                  <BookOnlineOutlinedIcon
                    sx={{ fontSize: "75px", color: "#914f10" }}
                  />
                  <Typography className="UI1">{ServicesText.OAS}</Typography>
                  <Typography className="UI2">{ServicesText.OASdes}</Typography>
                </Box>
                <Box className="UID1">
                  <DocumentScannerOutlinedIcon
                    sx={{ fontSize: "75px", color: "#914f10" }}
                  />
                  <Typography className="UI1">{ServicesText.DV}</Typography>
                  <Typography className="UI2">{ServicesText.DVdes}</Typography>
                </Box>
                <Box className="UID1">
                  <BrowserUpdatedOutlinedIcon
                    sx={{ fontSize: "75px", color: "#914f10" }}
                  />
                  <Typography className="UI1">{ServicesText.AU}</Typography>
                  <Typography className="UI2">{ServicesText.AUdes}</Typography>
                </Box>
                <Box className="UID1">
                  <ShieldOutlinedIcon
                    sx={{ fontSize: "75px", color: "#914f10" }}
                  />
                  <Typography className="UI1">{ServicesText.SI}</Typography>
                  <Typography className="UI2">{ServicesText.SIdes}</Typography>
                </Box>
              </Box>
            </Box>
          )}
          {screenNum === 1 && (
            <Suspense fallback={<Loading />}>
              <Box
                className="UIDCont"
                sx={{
                  padding: { sx: "none", lg: "25px 135px 25px 135px" },
                }}
              >
                <Typography className="serContent1">
                  {ServicesText.SDS}
                </Typography>
                <Box className="sdcont1">
                  {/* Web Development */}
                  <Box className="sdAlignCont">
                    <Box component="img" src={laptop} className="imgCont"></Box>
                  </Box>
                  <Box className="SDSitem">
                    <Typography className="SDS1">{ServicesText.WD}</Typography>
                    <Typography className="SDS2">
                      {ServicesText.WDdes}
                    </Typography>
                  </Box>
                  <Box
                    className="sdAlignCont1"
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
                  >
                    <Box component="img" src={mobile} className="imgCont"></Box>
                  </Box>
                  <Box className="SDSitem">
                    <Typography className="SDS1 sdsright">
                      {ServicesText.MAD}
                    </Typography>
                    <Typography className="SDS2 sdsright">
                      {ServicesText.MADdes}
                    </Typography>
                  </Box>
                  <Box
                    className="sdAlignCont2"
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
                  >
                    <Box component="img" src={mobile} className="imgCont"></Box>
                  </Box>
                  <Box className="sdAlignCont">
                    <Box
                      component="img"
                      src={UIDesign}
                      className="imgCont"
                    ></Box>
                  </Box>
                  <Box className="SDSitem">
                    <Typography className="SDS1">{ServicesText.UXD}</Typography>
                    <Typography className="SDS2">
                      {ServicesText.UXDdes}
                    </Typography>
                  </Box>
                  <Box
                    className="sdAlignCont1"
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
                  >
                    <Box component="img" src={bug} className="imgCont"></Box>
                  </Box>
                  <Box className="SDSitem">
                    <Typography className="SDS1 sdsright">
                      {ServicesText.STA}
                    </Typography>
                    <Typography className="SDS2 sdsright">
                      {ServicesText.STAdes}
                    </Typography>
                  </Box>
                  <Box
                    className="sdAlignCont2"
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
                  >
                    <Box component="img" src={bug} className="imgCont"></Box>
                  </Box>
                </Box>
                <Typography className="techStacktitle">
                  Tech We Employ
                </Typography>
                <Divider className="divider" />
                <Box className="teckStack">
                  {techStack.map((i) => (
                    <Box component="img" src={i} className="teckItem"></Box>
                  ))}
                </Box>
              </Box>
            </Suspense>
          )}
        </Box>
      </Box>
    </Suspense>
  );
};

export default Services;
