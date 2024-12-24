import React, { Suspense } from "react";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import ServicesText from "../../Config/Services";
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
import PropTypes from "prop-types";
import consult from "../../ProjectImages/CloudServices/cloud-consulting.jpg";
import manage from "../../ProjectImages/CloudServices/cloud-management.png";
import migrate from "../../ProjectImages/CloudServices/cloud-migration.png";
import devops from "../../ProjectImages/CloudServices/devops.png";
import asses from "../../ProjectImages/CyberSecurity/security-assesment.png";
import msecurity from "../../ProjectImages/CyberSecurity/manage-security.png";
import threat from "../../ProjectImages/CyberSecurity/threat-detection.png";
import BPO from "../../ProjectImages/ITConsulting/BPO.png";
import DT from "../../ProjectImages/ITConsulting/digital-transformation.png";
import SD from "../../ProjectImages/ITConsulting/strategy-development.png";
import TechRoad from "../../ProjectImages/ITConsulting/technology-roadmapping.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Services = () => {
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Suspense fallback={<Loading />}>
      <Box className="SerBox">
        <Box className="conT22">
          <Typography className="serviceTitle">
            Scalable Technology Services
          </Typography>
          <Typography className="serviceTitle1">
            Where Reliability Meets Cutting-Edge Innovation.
          </Typography>

          <Suspense fallback={<Loading />}>
            <Box
              className="UIDCont"
              sx={{
                padding: {
                  sx: "none",
                  md: "25px",
                  lg: "25px 135px 25px 135px",
                },
              }}
            >
              <Typography className="serContent1">
                {ServicesText.SDS}
              </Typography>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable auto tabs example"
                  >
                    <Tab label="Software Development" {...a11yProps(0)} />
                    <Tab label="Cloud Computing" {...a11yProps(1)} />
                    <Tab label="Cyber Security" {...a11yProps(2)} />
                    <Tab label="IT Consulting and Strategy" {...a11yProps(3)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <Suspense fallback={<Loading />}>
                    <Box className="sdcont1">
                      {/* Web Development */}
                      <Box className="sdAlignCont">
                        <Box
                          component="img"
                          src={laptop}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.WD}
                        </Typography>
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
                        <Box
                          component="img"
                          src={mobile}
                          className="imgCont"
                        ></Box>
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
                        <Box
                          component="img"
                          src={mobile}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="sdAlignCont">
                        <Box
                          component="img"
                          src={UIDesign}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.UXD}
                        </Typography>
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
                        <Box
                          component="img"
                          src={bug}
                          className="imgCont"
                        ></Box>
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
                        <Box
                          component="img"
                          src={bug}
                          className="imgCont"
                        ></Box>
                      </Box>
                    </Box>
                  </Suspense>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Suspense fallback={<Loading />}>
                    <Box className="sdcont1">
                      {/* Web Development */}
                      <Box className="sdAlignCont">
                        <Box
                          component="img"
                          src={consult}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.CSC}
                        </Typography>
                        <Typography className="SDS2">
                          {ServicesText.CSCdes}
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
                        <Box
                          component="img"
                          src={migrate}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1 sdsright">
                          {ServicesText.CM}
                        </Typography>
                        <Typography className="SDS2 sdsright">
                          {ServicesText.CMdes}
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
                        <Box
                          component="img"
                          src={migrate}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="sdAlignCont">
                        <Box
                          component="img"
                          src={manage}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.CMS}
                        </Typography>
                        <Typography className="SDS2">
                          {ServicesText.CMSdes}
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
                        <Box
                          component="img"
                          src={devops}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1 sdsright">
                          {ServicesText.DEVS}
                        </Typography>
                        <Typography className="SDS2 sdsright">
                          {ServicesText.DEVSdes}
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
                        <Box
                          component="img"
                          src={devops}
                          className="imgCont"
                        ></Box>
                      </Box>
                    </Box>
                  </Suspense>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <Suspense fallback={<Loading />}>
                    <Box className="sdcont2">
                      {/* Web Development */}
                      <Box className="sdAlignCont">
                        <Box
                          component="img"
                          src={asses}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.SAC}
                        </Typography>
                        <Typography className="SDS2">
                          {ServicesText.SACdes}
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
                        <Box
                          component="img"
                          src={msecurity}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1 sdsright">
                          {ServicesText.MSS}
                        </Typography>
                        <Typography className="SDS2 sdsright">
                          {ServicesText.MSSdes}
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
                        <Box
                          component="img"
                          src={msecurity}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="sdAlignCont">
                        <Box
                          component="img"
                          src={threat}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.TDR}
                        </Typography>
                        <Typography className="SDS2">
                          {ServicesText.TDRdes}
                        </Typography>
                      </Box>
                    </Box>
                  </Suspense>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <Suspense fallback={<Loading />}>
                    <Box className="sdcont1">
                      {/* Web Development */}
                      <Box className="sdAlignCont">
                        <Box component="img" src={SD} className="imgCont"></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.ITD}
                        </Typography>
                        <Typography className="SDS2">
                          {ServicesText.ITDdes}
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
                        <Box component="img" src={DT} className="imgCont"></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1 sdsright">
                          {ServicesText.DT}
                        </Typography>
                        <Typography className="SDS2 sdsright">
                          {ServicesText.DTdes}
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
                        <Box component="img" src={DT} className="imgCont"></Box>
                      </Box>
                      <Box className="sdAlignCont">
                        <Box
                          component="img"
                          src={BPO}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1">
                          {ServicesText.BPO}
                        </Typography>
                        <Typography className="SDS2">
                          {ServicesText.BPOdes}
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
                        <Box
                          component="img"
                          src={TechRoad}
                          className="imgCont"
                        ></Box>
                      </Box>
                      <Box className="SDSitem">
                        <Typography className="SDS1 sdsright">
                          {ServicesText.TR}
                        </Typography>
                        <Typography className="SDS2 sdsright">
                          {ServicesText.TRdes}
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
                        <Box
                          component="img"
                          src={TechRoad}
                          className="imgCont"
                        ></Box>
                      </Box>
                    </Box>
                  </Suspense>
                </CustomTabPanel>
              </Box>

              <Typography className="techStacktitle">Tech We Employ</Typography>
              <Divider className="divider" />
              <Box className="teckStack">
                {techStack.map((i) => (
                  <Box component="img" src={i} className="teckItem"></Box>
                ))}
              </Box>
            </Box>
          </Suspense>
        </Box>
      </Box>
    </Suspense>
  );
};

export default Services;
