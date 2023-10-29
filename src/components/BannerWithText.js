import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openForm } from "../features/Slices/HomepageSlice";

const BannerWithText = ({
  textOnly,
  title,
  description1,
  description2,
  banner,
  minHeight,
}) => {
  const dispatch = useDispatch();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: { md: "center center" },
          minHeight: { md: `${minHeight}px` },
          objectFit: "cover",
          display: "flex",
          justifyContent: !!textOnly && "flex-end",
          alignItems: !!textOnly && "center",
          padding: { xs: !!textOnly && "1rem", md: !!textOnly && "0 5rem" },
        }}
      >
        {textOnly === true ? (
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "40%" },
              textAlign: "center",
            }}
          >
            <Typography
              color="white.main"
              sx={{
                textTransform: "uppercase",
                marginBottom: "1rem",
                typography: { sm: "h5", xs: "body2" },
              }}
            >
              {description1}
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{ padding: "1rem" }}
              onClick={() => dispatch(openForm(""))}
            >
              Enquire now
            </Button>
          </Box>
        ) : (
          <Container
            sx={{
              backgroundColor: "primary.main",
              margin: { xs: "6rem 2rem", md: "0 9%" },
              padding: "2rem",
              maxWidth: { xs: "100%", md: "40% ", lg: "23%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ textTransform: "uppercase", marginBottom: "2rem" }}
              color="white.main"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="white.main"
              sx={{ textAlign: "justify", marginBottom: "1rem" }}
            >
              {description1}
            </Typography>
            <Typography
              variant="body2"
              color="white.main"
              sx={{ textAlign: "justify", marginBottom: "1rem" }}
            >
              {description2}
            </Typography>
          </Container>
        )}
      </Grid>
    </Grid>
  );
};

export default BannerWithText;
