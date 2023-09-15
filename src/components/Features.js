import React from "react";
import { Container, Typography, Grid, Box, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const Features = ({ features, backgroundColor, boxShadow, margin }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const Image = styled("img")(({ theme }) => ({
    backgroundColor: "brown",
    width: "50px",
    borderRadius: "50px",
  }));

  const mobile = (
    <Box
      sx={{ display: "flex", flexDirection: "column", justifyContent: "left" }}
    >
      <Typography
        variant="h5"
        sx={{
          padding: { sm: "20px", xs: "20px" },
          fontWeight: "bold",
        }}
      >
        WHY CHOOSE US
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          //   justifyContent: { lg: "space-evenly", md: "space-around" },
        }}
      >
        {features.map((item) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  padding: { sm: "20px", xs: "20px" },
                  boxShadow: boxShadow,
                  margin: margin,
                  backgroundColor: backgroundColor,
                }}
              >
                <Image src={item.image}></Image>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ width: { xs: "350px", sm: "650px" }, fontSize: "17px" }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );

  const desktop = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: { lg: "70px", md: "45px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          paddingBottom: "30px",

          fontWeight: "bold",
          padding: { lg: "30px", md: "10px" },
        }}
      >
        WHY CHOOSE US
      </Typography>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: "flex",
          justifyContent: { lg: "space-around", md: "space-around" },
        }}
      >
        {features.map((item) => {
          return (
            <>
              <Grid
                sx={{
                  padding: { lg: "30px", md: "10px" },
                  boxShadow: boxShadow,
                  margin: margin,
                  backgroundColor: backgroundColor,
                }}
              >
                <Image src={item.image}></Image>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    paddingTop: "10px",
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
    </Box>
  );
  return <Container maxWidth="100%">{isMobile ? mobile : desktop}</Container>;
};

export default Features;
