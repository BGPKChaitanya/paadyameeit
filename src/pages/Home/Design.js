import React, { useRef } from "react";
import { motion } from "framer-motion";
// import {  useMotionValueEvent, useScroll } from "framer-motion";
import { Box, Typography } from "@mui/material";
import understand from "../../ProjectImages/understand.png";
import design from "../../ProjectImages/design.png";
import code from "../../ProjectImages/code.png";
import development from "../../ProjectImages/development.png";
import interaction from "../../ProjectImages/interaction.png";
import DESIGNText from "../../Config/Design";
import "./Design.css";

import fadeIn from "../Varients";

const Design = () => {
  const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"],
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  const imagePlate = (img, dir) => {
    return (
      <motion.img
        variants={fadeIn(dir, 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        style={{ height: "100%" }}
        // component="img"
        src={img}
      ></motion.img>
    );
  };

  const namePlate = (title, des, dir, txtali) => {
    return (
      <motion.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        variants={fadeIn(dir, 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <Typography
          className="txt1"
          sx={{
            textAlign: { xs: "center", sx: "center", md: txtali, lg: txtali },
          }}
        >
          {title}
        </Typography>
        <Typography
          className="txt2"
          sx={{
            textAlign: { xs: "center", sx: "center", md: txtali, lg: txtali },
          }}
        >
          {des}
        </Typography>
      </motion.Box>
    );
  };

  return (
    <Box className="desCon" ref={ref}>
      <Box
        sx={{
          padding: { xs: "none", sm: "none", lg: "50px 135px 25px 135px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.Typography
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="desTitle1"
        >
          Way of Building
        </motion.Typography>
        <motion.Typography
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="desTitle"
        >
          Great Software
        </motion.Typography>
        <motion.hr
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          style={{
            width: "100px",
            border: "2px solid #e68d39",
            borderRadius: "20px",
            margin: "10px",
          }}
        />
      </Box>
      <Box className="destextCon">
        <Box className="destext">
          {imagePlate(understand, "left")}

          {namePlate(
            DESIGNText.UNDERSTAND_TITLE,
            DESIGNText.UNDERSTAND,
            "right",
            "left"
          )}

          {/* Visible in mobile */}
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
            className="anime"
          >
            {imagePlate(design, "right")}
          </Box>
          {namePlate(
            DESIGNText.DESIGN_TITLE,
            DESIGNText.DESIGN,
            "left",
            "right"
          )}

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
          >
            {imagePlate(design, "right")}
          </Box>
          <Box sx={{ height: "100%" }}>{imagePlate(code, "left")}</Box>

          {namePlate(DESIGNText.CODE_TITLE, DESIGNText.CODE, "right", "left")}

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
          >
            {imagePlate(development, "right")}
          </Box>
          {namePlate(
            DESIGNText.DEPLOYMENT_TITLE,
            DESIGNText.DEPLOYMENT,
            "left",
            "right"
          )}

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
          >
            {imagePlate(development, "right")}
          </Box>
          <Box sx={{ height: "100%" }}>{imagePlate(interaction, "left")}</Box>
          {namePlate(DESIGNText.USERS_TITLE, DESIGNText.USERS, "right", "left")}
        </Box>
      </Box>
    </Box>
  );
};

export default Design;
