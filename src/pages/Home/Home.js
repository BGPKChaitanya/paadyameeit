import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Partners from "./Partners";
import Design from "./Design";
import { motion } from "framer-motion";
import fadeIn from "../Varients";
import { Suspense } from "react";
import Loading from "../Loading/Loading";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <Suspense fallback={<Loading />}>
      <Box>
        <Box className="homeContainer">
          <Box
            className="homeInnerContainer"
            sx={{
              padding: { sx: "none", lg: "25px 135px 25px 135px" },
            }}
          >
            <motion.Box
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Typography className="hometitle">
                Empower Your <span className="htitle1">Ideas</span> with {""}
              </Typography>
              <Typography className="hometitle htitle2">
                <Typewriter
                  words={[
                    "Technology",
                    "Team work",
                    "Expertise",
                    "Creativity",
                    "Innovation",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Typography>
              <Typography className="titledes">
                Our expert team brings your ideas to life with precision and
                impact, ensuring that every project is executed with the highest
                level of skill and care.
              </Typography>
            </motion.Box>
            <motion.Button
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              onClick={handleClick}
              className="requestButton"
            >
              Request a demo
            </motion.Button>
          </Box>
        </Box>
        <Partners />
        <Design />
      </Box>
    </Suspense>
  );
};

export default Home;
