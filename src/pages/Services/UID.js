import React, { Suspense } from "react";

import { Box, Typography } from "@mui/material";

import ServicesText from "../../Config/Services";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Loading from "../Loading/Loading";

import "./Services.css";

const UID = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Box className="SerBox">
        <Box className="conT22">
          <Typography className="serviceTitle">Aadhar Services</Typography>
          <Typography className="serviceTitle1">
            We proudly offer our services nationwide, reaching every corner of
            India.
          </Typography>

          <Box
            className="UIDCont"
            sx={{
              padding: { sx: "none", md: "25px", lg: "25px 135px 25px 135px" },
            }}
          >
            <Typography className="serContent1">
              {ServicesText.UIDdes1}
            </Typography>
            <Box className="UIDitems">
              <Box className="UID1">
                <AddBusinessIcon sx={{ fontSize: "75px", color: "#914f10" }} />
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
        </Box>
      </Box>
    </Suspense>
  );
};

export default UID;
