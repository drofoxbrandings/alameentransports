import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ServiceSection = ({ isTextleft, description, title, image1, image2 }) => {
  return (
    <Grid
      container
      sx={{
        margin: "8rem 0",
        justifyContent: "space-between",
        flexDirection: {
          md: !!isTextleft ? "row-reverse" : "row",
          xs: "column-reverse",
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: !!isTextleft ? "flex-end" : "flex-start",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            maxWidth: { xs: "100%", md: "70%" },
          }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid
          container
          columnSpacing={2}
          rowSpacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Grid
            item
            xs={6}
            sx={{
              "& img": {
                height: "200px",
                objectFit: "cover",
                borderRadius: ".5rem",
              },
            }}
          >
            <img width="100%" src={image1} alt={title} />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                background: "#C53A50",
                color: "#fff",
                minHeight: "100%",
                borderRadius: ".5rem",
                display: "flex",
                alignItems: "flex-end",
                textTransform: "uppercase",
              }}
            >
              <Typography
                variant="h5"
                sx={{ padding: "1rem", fontSize: { xs: "1.3rem" } }}
              >
                {title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <img width="100%" src={image2} alt={title} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceSection;
