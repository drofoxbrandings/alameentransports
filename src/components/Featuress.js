import { Grid, Typography, Box } from "@mui/material";
import React from "react";

const Featuress = ({ features }) => {
  return (
    <>
      <Grid container  justifyContent="flex-start" >
        <Grid>
          <Typography
            variant="h4"
            sx={{ fontSize: "2rem", fontWeight: "bold",padding:"2rem 0" }}
          >
            WHY CHOOSE US
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {features.map((item) => {
            return (
              <>
                <Grid  item xs={12} md={4} sx={{ padding: "2rem" }} >
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      borderRadius: "100px",
                      width: "5rem",
                      height: "5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img width="50%" src={item.image} alt="safety" />
                  </Box>
                  <Typography variant="h6" sx={{padding:"1rem 0"}}>{item.title}</Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </Grid>
              </>
            );
          })}
          {/* <Grid xs={12} md={4} sx={{padding: '2rem'}}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "100px",
            width: "5rem",
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="50%"
            src="https://alameentransportuae.com/static/media/safeIcon.b137857f.svg"
            alt="safety"
          />
        </Box>
        <Typography variant="h6">Title</Typography>
        <Typography variant="body1">Offering passangers peace of mind with meticulously trained and
    experienced drivers,top-of-the-line vehicles equipped with advanced
    safety features, and rigorous adherence to strict safety protocols.</Typography>
      </Grid>
      <Grid xs={12} md={4} sx={{padding: '2rem'}}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: "100px",
            width: "5rem",
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="50%"
            src="https://alameentransportuae.com/static/media/safeIcon.b137857f.svg"
            alt="safety"
          />
        </Box>
        <Typography variant="h6">Title</Typography>
        <Typography variant="body1">Offering passangers peace of mind with meticulously trained and
    experienced drivers,top-of-the-line vehicles equipped with advanced
    safety features, and rigorous adherence to strict safety protocols.</Typography>
      </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Featuress;
