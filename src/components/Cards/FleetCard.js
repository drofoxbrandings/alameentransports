import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { openForm } from "../../features/Slices/HomepageSlice";

const FleetCard = ({ image, title, rating, company }) => {
  const ratingArr = new Array(rating).fill(<StarIcon color="primary" />);
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        maxWidth: "300px",
        margin: "auto",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          backgroundColor: "#c53a5014",
          borderRadius: "65%",
          transform: "translateX(3rem) scale(1.2)",
          minHeight: "12rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img width="100%" src={image} />
      </Box>
      <CardContent sx={{ margin: "3rem 0 0 0" }}>
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          {ratingArr.map((itm, idx) => (
            <Typography variant="h6" key={idx}>
              {itm}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ borderRadius: 0 }}
          variant="contained"
          onClick={() => dispatch(openForm(company))}
        >
          Get a Quote
        </Button>
      </Box>
    </Card>
  );
};

export default FleetCard;
