import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const Features = ({ features}) => {
  const Image = styled("img")(({ theme }) => ({
    backgroundColor: "brown",
    width: "50px",
    borderRadius: "50px",
  }));

  const desktop = (
    <Grid container justifyContent="space-around">
      <Grid
        item
        lg={10}
        md={11}
        xl={11}
        xs={12}
        sx={{ padding: { lg: "2rem 0rem", md: "2rem 1rem", xl: "2rem 4rem" } }}
      >
        <Typography variant="h4" sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          WHY CHOOSE US
        </Typography>
      </Grid>
      <Grid container justifyContent="space-evenly">
        {features.map((item) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                sx={{
                  boxShadow: 0,
                  backgroundColor: "white.light",
                  padding: {
                    xs: "2rem 0rem",
                    lg: "0rem 1.5rem",
                    xl: "0rem 1.5rem",
                  },
                }}
              >
                <Image src={item.image}></Image>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    padding: "1rem 0rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ width: { lg: "280px", md: "250px", fontSize: "14px" } }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Grid>
  );
  return <Container maxWidth="100%">{desktop}</Container>;
};

export default Features;
