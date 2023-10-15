import { Grid, Typography } from "@mui/material";
import React from "react";

const ClientsSection = ({ clientImages }) => {
  return (
    <Grid container marginX="auto" sx={{ margin: "2rem 0" }}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{ textTransform: "uppercase", marginBottom: "2rem" }}
        >
          Some happy customers
        </Typography>
      </Grid>
      {clientImages?.map((item, index) => (
        <Grid
          key={index}
          item
          xs={6}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxHeight: "320px",
            padding: "1rem",
            "& img": {
              objectFit: "contain",
            },
            margin: "2rem 0",
          }}
        >
          <img
            width="100%"
            height="100px"
            src={item.image}
            alt={`${item.label}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ClientsSection;
