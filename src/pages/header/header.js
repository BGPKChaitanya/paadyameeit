import * as React from "react";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import logo from "../../ProjectImages/logo.png";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Fade from "@mui/material/Fade";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Projects", "Career", "Contact"];

function Header(props) {
  // const { window } = props
  const navigate = useNavigate();
  const path = window.location.pathname;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navBar, setnavBar] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorsEl, setAnchorsEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const opens = Boolean(anchorsEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigateTo = (item) => {
    navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`, true);
    setAnchorEl(null);
    setAnchorsEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlesClick = (event) => {
    setAnchorsEl(event.currentTarget);
  };
  const handlesClose = () => {
    setAnchorsEl(null);
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawernavigateTo = (item) => {
    navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`, true);
    handleDrawerToggle();
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) =>
          item === "About" || item === "Services" ? (
            item === "About" ? (
              <Accordion elevation={0} sx={{ "&:before": { height: "0px" } }}>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    onClick={() => drawernavigateTo("About")}
                    sx={{ textAlign: "left", paddingLeft: "15px" }}
                  >
                    About Us
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography
                    onClick={() => drawernavigateTo("history")}
                    sx={{ textAlign: "left", paddingLeft: "15px" }}
                  >
                    History
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Accordion elevation={0} sx={{ "&:before": { height: "0px" } }}>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    onClick={() => drawernavigateTo("technologies")}
                    sx={{ textAlign: "left", paddingLeft: "15px" }}
                  >
                    Technologies
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography
                    onClick={() => drawernavigateTo("uid")}
                    sx={{ textAlign: "left", paddingLeft: "15px" }}
                  >
                    Aadhaar Services
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      textTransform: "none",
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        // className={navBar ? "appBar active" : "appBar"}
        sx={{
          padding: { sx: "none", lg: "0px 100px 0px 100px" },
          backgroundColor: navBar ? "#e4e6eb" : "transparent",
          position: "fixed",
          height: { sx: "none", lg: "80px" },
          top: 0,
        }}
      >
        <Toolbar>
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
                sx={{
                  height: "80px",
                  border: "2px solid #058037",
                  backgroundColor: "#058037",
                  padding: "10px",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  sx={{
                    height: { xs: "45px", sm: "45px", md: "45px", lg: "60px" },
                    // height: "80px",
                    backgroundColor: "#058037",
                    // border: "1px solid red",
                    // width: { xs: "24px", sm: "24px", md: "24px", lg: "50px" },
                  }}
                ></Box>
              </Box>
            </Link>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: navBar ? "#058037" : path === "/" ? "#058037" : "#ffffff",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {navItems.map((item) => (
                <Box>
                  <Button
                    key={item}
                    className="navButton"
                    sx={{
                      color: navBar
                        ? "#058037"
                        : path === "/"
                        ? "#058037"
                        : "#ffffff",
                      textTransform: "none",
                      fontSize: "23px",
                      width: { md: "100px", lg: "150px" },
                    }}
                    onClick={
                      (item === "About" || item === "Services") &&
                      item === "About"
                        ? handleClick
                        : item === "Services"
                        ? handlesClick
                        : () => navigateTo(item)
                    }
                  >
                    {item}
                    {item === "About" || item === "Services" ? (
                      <ArrowDropDownIcon />
                    ) : (
                      ""
                    )}
                  </Button>
                  {item === "About" ? (
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem
                        onClick={() => navigateTo("about")}
                        sx={{ width: "150px" }}
                      >
                        About Us
                      </MenuItem>
                      <MenuItem
                        onClick={() => navigateTo("history")}
                        sx={{ width: "150px" }}
                      >
                        History
                      </MenuItem>
                    </Menu>
                  ) : (
                    ""
                  )}

                  {item === "Services" ? (
                    <Menu
                      id="fades-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorsEl}
                      open={opens}
                      onClose={handlesClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={() => navigateTo("technologies")}>
                        Technologies
                      </MenuItem>
                      <MenuItem onClick={() => navigateTo("uid")}>
                        Aadhaar Services
                      </MenuItem>
                    </Menu>
                  ) : (
                    ""
                  )}
                </Box>
                // </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
// }

Header.propTypes = {};

export default Header;
