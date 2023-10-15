import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const Features = ({ image, label, description }) => {
  return (
    <Card elevation={0}>
      <CardHeader
        avatar={
          <Avatar sx={{ padding: ".75rem", backgroundColor: "primary.main" }}>
            <img src={`${image}`} alt="label" />
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="body1" sx={{textAlign: 'justify'}}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Features;
