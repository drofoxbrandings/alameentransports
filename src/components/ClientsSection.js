import { Box, Grid, Stack, Typography } from "@mui/material";
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

      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2} justifyContent="center">
          {clientImages?.map((item, index) => (
            <Grid item xs={6} md="auto" key={index}>
              <Box
                sx={{
                  maxHeight: "320px",
                  padding: "1rem",
                  "& img": {
                    objectFit: "contain",
                  },
                  border: "1px solid #ddd",
                }}
              >
                <img
                  width="100%"
                  height="100px"
                  src={item.image}
                  alt={`${item.label}`}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <Stack
        direction={"row"}
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {clientImages?.map((item, index) => (
          <Box
            key={index}
            sx={{
              margin: ".5rem",
              maxHeight: "320px",
              padding: "1rem",
              width: { xs: "calc(50% - 1rem)", md: "auto" },
              "& img": {
                objectFit: "contain",
              },
              border: "1px solid #ddd",
            }}
          >
            <img
              width="100%"
              height="100px"
              src={item.image}
              alt={`${item.label}`}
            />
          </Box>
        ))}
      </Stack> */}
    </Grid>
  );
};

export default ClientsSection;
