import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const BasicCard = ({ cardImage, title, description }) => {
  return (
    <Card >
      <CardMedia image={`${cardImage}`} component="img" />
      <CardContent>
        <Typography
          variant="h5"
          sx={{ textTransform: "uppercase", fontWeight: 500, margin: "1rem 0" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
