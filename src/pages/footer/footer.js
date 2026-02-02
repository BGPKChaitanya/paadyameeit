import React from "react";
import "./footer.css";
import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../../ProjectImages/logo.png";

const Footer = () => {
  const navItems = [
    "Home",
    "About",
    "History",
    "Technologies",
    "Aadhaar Services",
    "Construction Design Services",
    "Projects",
    "Career",
    "Contact",
  ];

  const date = new Date();
  let year = date.getFullYear();

  const routeMap = {
  Home: "/",
  "Aadhaar Services": "/uid",
};

const getHref = (item) => {
  if (routeMap[item]) return routeMap[item];

  // Fallback: convert label → URL slug
  return `/${item
    .toLowerCase()
    .replace(/\s+/g, "-")      // spaces → dashes
    .replace(/[^a-z0-9-]/g, "")}`; // remove weird chars
};


  return (
    <Box
      className="headline"
      sx={{ padding: { sx: "none", lg: "25px 135px 25px 135px" } }}
    >
      <Box className="fotCon">
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Link to="/">
              <Box
                component="img"
                src={logo}
                sx={{
                  height: { xs: "45px", sm: "45px", md: "45px", lg: "60px" },
                  // width: { xs: "24px", sm: "24px", md: "24px", lg: "50px" },
                }}
              ></Box>
            </Link>
            {/* <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h4"
                sx={{
                  my: 2,
                  marginLeft: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "25px" },
                  textDecoration: "none",
                }}
              >
                Paadyamee IT Solutions Pvt Ltd
              </Typography>
            </Link> */}
          </Box>
          <Box className="iconContainer">
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "13px", sm: "13px", md: "13px", lg: "16px" },
              }}
            >
              Follow Us:
            </Typography>
            <Link
              href="https://in.linkedin.com/company/paadyamee-it-solutions"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "#fff" }} />
            </Link>
            <Link
              href="https://www.youtube.com/@PaadyameeITSolutionsPvtLtd19"
              target="_blank"
            >
              <YouTubeIcon sx={{ color: "#fff" }} />
            </Link>
            <Link
              href="https://www.instagram.com/paadyamee_it/?igsh=bTBsbGpkemxkOTI1"
              target="_blank"
            >
              <InstagramIcon sx={{ color: "#fff" }} />
            </Link>
            {/* <Link
              href="https://in.linkedin.com/company/paadyamee-it-solutions"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "#fff" }} />
            </Link> */}
          </Box>
        </Box>
        <Box className="footerContents">
          {navItems.map((item) => (
            <Typography
              key={item}
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "13px",
                  sm: "13px",
                  md: "13px",
                  lg: "16px",
                },
                textDecoration: "none",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
                cursor: "pointer",
              }}
            >
              {/* <Link
                href={
                  item === "Home"
                    ? "/"
                    : item === "Aadhaar Services"
                    ? "/uid"
                    : `/${item.toLowerCase()}`
                }
                underline="none"
                sx={{ color: "#fff" }}
              >
                {item}
              </Link> */}
              <Link
  href={getHref(item)}
  underline="none"
  sx={{ color: "#fff" }}
>
  {item}
</Link>
            </Typography>
          ))}
        </Box>
      </Box>
      {/* <Divider sx={{ backgroundColor: "#fff" }} /> */}
      <Box>
        <Typography
          sx={{
            color: "#fff",
            p: 2,
            fontSize: { xs: "10px", sm: "13px", md: "13px", lg: "16px" },
          }}
        >
          &copy; {year} Paadyamee IT Solutions Pvt Ltd. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
