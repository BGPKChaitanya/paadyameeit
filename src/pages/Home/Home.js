import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };

  return (
    <Box className="homeContainer">
      <Box className="homeInnerContainer">
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
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </Typography>
          <Typography className="titledes">
            Our expert team brings your ideas to life with precision and impact,
            ensuring that every project is executed with the highest level of
            skill and care.
          </Typography>
        </Box>
        <Button onClick={handleClick} className="requestButton">
          Request a demo
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
