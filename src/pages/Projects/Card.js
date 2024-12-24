import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const navigate = useNavigate();
  const { data, i } = props;
  let { image, heading, description } = data;

  const projectView = () => {
    let j = i + 1;
    navigate(`/projects/${j}`);
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        margin: "20px",
        backgroundColor: "#e4e6eb",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="250px"
        sx={{ objectFit: "contain", width: "250px", margin: "15px" }}
        src={image}
      />
      <Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "16px" }}
          >
            {description[0]}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Link to=`/projects/${i+1}` > */}
          <Button size="small" onClick={() => projectView()}>
            Know More
          </Button>
          {/* </Link> */}
        </CardActions>
      </Box>
    </Card>
  );
};

export default Cards;
