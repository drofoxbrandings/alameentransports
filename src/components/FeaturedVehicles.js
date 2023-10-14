import {
  Box,
  Button,
  Grid,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@emotion/react";
import StarIcon from "@mui/icons-material/Star";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const FeaturedVehicles = ({
  vehiclesList,
  vehicleName,
  model,
  company,
  rating,
  imageSide,
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = vehiclesList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid
      container
      spacing={12}
      sx={{
        marginBottom: "6rem",
        flexDirection: { xs: imageSide === "right" ? "row-reverse" : "row" },
      }}
    >
      <Grid item xs={12} md={6}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {vehiclesList.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    maxHeight: "350px",
                    objectFit: "contain",
                    borderRadius: '.5rem'
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        sx={{
          textAlign: {
            md: imageSide === "right" ? "right" : "left",
            xs: "center",
          },
          margin: '0 2rem'
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          sx={{ textTransform: "uppercase", marginBottom: "2rem" }}
        >
          {vehicleName}
        </Typography>
        <Typography gutterBottom variant="h6" color="secondary">
          Model: {model}
        </Typography>
        <Typography gutterBottom variant="h6" color="secondary">
          Category: {company}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          color="secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              md: imageSide === "right" ? "flex-end" : "flex-start",
              xs: "center",
            },
          }}
        >
          Rating:
          {rating.map((item) => (
            <StarIcon color="primary" key={item} />
          ))}
        </Typography>

        <Button sx={{ marginTop: "4rem", padding: "1rem" }} variant="outlined">
          Enquire now
        </Button>
      </Grid>
    </Grid>
  );
};

export default FeaturedVehicles;
