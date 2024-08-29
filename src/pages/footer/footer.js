import React from "react";
import "./footer.css";
import { Box, Button, Divider, Link, Typography } from "@mui/material";

const Footer = () => {
  const navItems = ["Home", "About", "Services", "Career", "Contact"];

  const date = new Date();
  let year = date.getFullYear();

  return (
    <Box className="headline">
      {/* <h1 className="footer">Footer</h1> */}
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
            src="https://ik.imagekit.io/p0ykayweu/download__1_-removebg-preview.png?updatedAt=1724746158404"
            sx={{
              height: { xs: "18px", sm: "18px", md: "18px", lg: "18px" },
              width: { xs: "18px", sm: "18px", md: "18px", lg: "18px" },
            }}
          ></Box>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h4"
            sx={{
              my: 2,
              marginLeft: "10px",
              fontWeight: "bold",
              color: "#fff",
              fontSize: { xs: "15px", sm: "15px", md: "15px", lg: "15px" },
              textDecoration: "none",
            }}
          >
            PAADYAMEE
          </Typography>
        </Link>
      </Box>
      <Box className="footerContents">
        {navItems.map((item) => (
          <Link to={item == "Home" ? "/" : `/${item}`}>
            <Typography
              key={item}
              sx={{
                color: "#fff",
                // textTransform: "none",
                fontSize: "15px",
                textDecoration: "none",
                cursor: "pointer",
                // width: { md: "100px", lg: "150px" },
              }}
            >
              {item}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box className="footerContents">
        <Box className="fc1"></Box>
        <Box className="fc1"></Box>
      </Box>
      <Divider sx={{ backgroundColor: "#fff" }} />
      <Box>
        <Typography sx={{ color: "#fff", p: 2 }}>
          &copy; {year} Paadyamee IT Solutions. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
