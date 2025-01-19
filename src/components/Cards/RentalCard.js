import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import transmissionIcon from "../../assets/gear.png";
import engineIcon from "../../assets/engine.png";
import seatIcon from "../../assets/seat.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const RentalCard = ({
  image,
  title,
  transmissionTxt,
  engineTxt,
  seatsTxt,
  price,
}) => {
  const handlEnquiry = (title) => {
    const message = `Hi, I am interested in renting ${title}`;
    const url = `https://wa.me/971505058724?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <Card variant="outlined">
      <CardMedia component="img" image={image} alt={title} height={250} />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ textTransform: "uppercase", mb: 4 }}
        >
          {title}
        </Typography>
        <Grid container>
          <Grid item xs={4}>
            <Stack
              direction={"column"}
              useFlexGap
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ border: "1px solid #ddd", padding: ".5rem" }}
            >
              <Box>
                <img width="20" src={transmissionIcon} alt="transmission" />
              </Box>
              <Typography variant="body2">{transmissionTxt}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction={"column"}
              useFlexGap
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ border: "1px solid #ddd", padding: ".5rem" }}
            >
              <Box>
                <img width="20" src={engineIcon} alt="engine" />
              </Box>
              <Typography variant="body2">{engineTxt}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction={"column"}
              useFlexGap
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ border: "1px solid #ddd", padding: ".5rem" }}
            >
              <Box>
                <img width="20" src={seatIcon} alt="seats" />
              </Box>
              <Typography variant="body2">{seatsTxt}</Typography>
            </Stack>
          </Grid>
        </Grid>
        {/* <Typography variant="h6" sx={{ mt: 2 }} color={"primary"}>
          Starting@ AED {price}
        </Typography> */}
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "end", mt: 2 }}
        >
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={() => {
              handlEnquiry(title);
            }}
          >
            Enquire now
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RentalCard;
