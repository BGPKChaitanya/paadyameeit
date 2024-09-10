import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Partners from "./Partners";
import Design from "./Design";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };

  return (
    <Box>
      <Box className="homeContainer">
        <Box
          className="homeInnerContainer"
          sx={{
            padding: { sx: "none", lg: "25px 135px 25px 135px" },
          }}
        >
          <Box>
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
          </Box>
          <Button onClick={handleClick} className="requestButton">
            Request a demo
          </Button>
        </Box>
      </Box>
      <Partners />
      <Design />
    </Box>
  );
};

export default Home;
