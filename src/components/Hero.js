import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import TitleCard from "./Cards/TitleCard";
import { titleCards } from "../constants/TitleCards";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
const Hero = ({
  image,
  title,
  description,
  btnLabel,
  btnFn,
  isFullWidthHero,
  altTxt,
  hasVideo,
}) => {
  return (
    <>
      {!!isFullWidthHero ? (
        <Grid
          container
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: { md: "center" },
            minHeight: { xs: "100vh", md: "calc(100vh - 178px)" },
            justifyContent: {
              xs: "flex-start",
              sm: "flex-start",
              md: "space-around",
            },
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={5}
            sx={{
              padding: { xs: "2rem 1rem" },
            }}
          >
            <Typography
              variant="h1"
              color={!!isFullWidthHero ? "white.dark" : "primary"}
              sx={{
                textTransform: "uppercase",
                marginBottom: ".5rem",
                fontSize: { xs: "3rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color={!!isFullWidthHero ? "white.dark" : "primary"}
              sx={{ marginBottom: ".5rem" }}
            >
              {description}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ margin: "1.5rem 0", padding: "1rem" }}
              onClick={btnFn}
            >
              {btnLabel}
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
            sx={{
              // display: "flex",
              // justifyContent: { xs: "flex-start", md: "center" },
              padding: "1rem",
            }}
          >
            <Grid container spacing={1} >
              {titleCards.map((item, index) => (
                <Grid item xs={6} md={6} key={index} >
                  <Link href={item.link} underline="none">
                    <TitleCard
                      image={item.image}
                      title={item.title}
                      cardId={index}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container maxWidth="lg" marginX="auto">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              minHeight: { xs: "100vh", md: "calc(100vh - 180px)" },
              "& img": {
                objectFit: "cover",
                height: { xs: "100vh", md: "calc(100vh - 180px)" },
                width: "100%",
                // width: { xs: "100vh", md: "70%", sm: "100%" },
              },
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <img src={image} alt={altTxt} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                position: { xs: "absolute", md: "relative" },
                padding: "1rem",
                backgroundColor: { xs: "secondary.light", md: "white.main" },
                margin: "0 1rem",
              }}
            >
              {!!hasVideo && (
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  startIcon={<PlayCircleOutlineIcon />}
                  onClick={btnFn}
                >
                  Play video
                </Button>
              )}
              <Typography
                variant="h1"
                sx={{
                  textTransform: "uppercase",
                  maxWidth: { xs: "100%", md: "75%" },
                  fontSize: { xs: "3rem", md: "4rem" },
                  filter: "opacity(.35)",
                  transform: {
                    xs: "translateY(3rem)",
                    sm: "translateY(2rem)",
                    md: "translateY(3rem)",
                  },
                  fontWeight: "700",
                }}
                color="primary"
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "justify",
                  fontSize: "1rem",
                  color: { xs: "white.dark", md: "secondary.main" },
                }}
              >
                {description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Hero;
