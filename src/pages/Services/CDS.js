import React, { Suspense } from "react";

import { Box, Divider, Typography } from "@mui/material";

import CDSText from "../../Config/CDSText";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Loading from "../Loading/Loading";

import cad from "../../ProjectImages/techstack/AutoCAD-logo.png";
import Staad from "../../ProjectImages/techstack/staad-pro-logo.png";
import etabs from "../../ProjectImages/techstack/etabs.png";
import revit from "../../ProjectImages/techstack/revit.png";
import safe from "../../ProjectImages/techstack/safe.png";
import sketchup from "../../ProjectImages/techstack/sketchup.png";
import Struct from "../../ProjectImages/CDSImages/StructAnalysis.jpeg";

import "./Services.css";

const CDS = () => {
  const techStack = [cad, Staad, etabs, safe, revit, sketchup];
  return (
    <Suspense fallback={<Loading />}>
      <Box className="SerBox1">
        <Box className="conT22">
          <Typography className="serviceTitle">
            Structural Design Services
          </Typography>
          <Typography className="serviceTitle1">
            Designing Structures. Defining Futures.
          </Typography>

          <Box
            className="UIDCont"
            sx={{
              padding: { sx: "none", md: "25px", lg: "25px 135px 25px 135px" },
            }}
          >
            <Box className="cdscont1">
              <Box component="img" src={Struct} className="imgCont1"></Box>
              <Box>
                <Typography className="serContent2">
                  {CDSText.CDSdes1}
                </Typography>
                <Typography className="serContent2 cdsConta1">
                  {CDSText.CDSdes2}
                </Typography>
              </Box>
            </Box>
            <Typography className="serContent2 cdsConta2">
              {CDSText.CDSdes2}
            </Typography>
            <Typography className="serContent2">{CDSText.CDSdes3}</Typography>

            <Typography className="techStacktitle">
              Design Tech We Employ
            </Typography>
            <Divider className="divider" />
            <Box className="teckStack">
              {techStack.map((i) => (
                <Box component="img" src={i} className="CDSItem"></Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
};

export default CDS;
