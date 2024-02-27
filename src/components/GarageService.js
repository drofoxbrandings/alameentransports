import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const GarageService = ({ isLeft, ...props }) => {
  console.log(props);
  return (
    <Card
      sx={{
        width: "100%",
        transition: "all .5s ease",
        "&:hover": {
          boxShadow: "0 0 16px 0 #00000021",
        //   transform: "scale(1.01)",
          "& img": {
            transform: "scale(1.05)",
          },
        },
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={props.image}
        height={250}
        sx={{
          transition: "all 1s ease",
        }}
      />
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body2">{props.desc}</Typography>
        <Box sx={{ margin: "1rem 0" }}>
          {props.serviceList.map((item, idx) => (
            <Chip
              key={idx}
              label={item}
              variant="outlined"
              color="primary"
              size="small"
              sx={{ margin: ".25rem" }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
    // <Card
    //   sx={{
    //     position: "relative",
    //     "&:hover": {
    //       "& img": { transform: "scale(1.1)" },
    //       "& .MuiCardContent-root": {
    //         backdropFilter: "blur(2px)",
    //         backgroundColor: "#00000085",
    //         transform: "translateY(0%)",
    //       },
    //       "& .MuiTypography-body1": {
    //         transform: "translateY(0%)",
    //       },
    //     },
    //     width: "100%",
    //   }}
    // >
    //   <CardMedia
    //     component="img"
    //     image={props.image}
    //     height={400}
    //     sx={{ transition: "transform 3s ease", width: "100%" }}
    //     alt="green iguana"
    //   />
    //   <CardContent
    //     sx={{
    //       backgroundColor: "#000000",
    //       // backdropFilter: "blur(0)",
    //       color: "white",
    //       textalign: "left",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "flex-start",
    //       position: "absolute",
    //       top: "0",
    //       transform: "translateY(75%)",
    //       height: "100%",
    //       transition: "transform 1s ease",
    //       width: "100%",
    //     }}
    //   >
    //     <Typography variant="h5" color="white.main">
    //       Luxury Car
    //     </Typography>
    //     <Typography
    //       variant="body1"
    //       sx={{
    //         textAlign: "left",
    //         marginTop: "1rem",
    //         transform: "translateY(10%)",
    //         transition: "transform 1s ease",
    //         color: "white.main",
    //       }}
    //     >
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text ever
    //       since the 1500s, when an unknown printer took a galley of type and
    //       scrambled it to make a type specimen book. It has survived not only
    //       five centuries, but also the leap into electronic typesetting,
    //       remaining essentially unchanged.
    //     </Typography>
    //     <Stack direction="row" sx={{ marginTop: "1rem" }}>
    //       <Chip
    //         label="McLaren F1"
    //         variant="outlined"
    //         sx={{ margin: ".25rem", color: "#ffffff" }}
    //         size="small"
    //       />
    //       <Chip
    //         label="Ferrari Enzo"
    //         variant="outlined"
    //         sx={{ margin: ".25rem", color: "#ffffff" }}
    //         size="small"
    //       />
    //       <Chip
    //         label="Ferrari LaFerrari"
    //         variant="outlined"
    //         sx={{ margin: ".25rem", color: "#ffffff" }}
    //         size="small"
    //       />
    //     </Stack>
    //   </CardContent>
    // </Card>
    // <Card
    //   elevation={0}
    //   sx={{
    //     "&:hover": {
    //       "& img": {
    //         transform: "scale(1.18)",
    //         transition: "transform 5s ease-in",
    //         height: '400px'
    //       },
    //       "& .MuiCardContent-root": {
    //         height: "max-content",
    //         transform: "translateY(0)",
    //         transition: "transform 1s ease",
    //         backgroundColor: "#00000085",
    //         maxHeight: "400px",
    //         position: "absolute",
    //         top: 0,
    //       },
    //       "& .MuiTypography-body1": {
    //         visibility: "visible",
    //         opacity: "1",
    //         transform: "translateY(0)",
    //         transitionDuration: "1s",
    //       },
    //       "& .MuiChip-root": {
    //         visibility: "visible",
    //         opacity: "1",
    //         transform: "translateY(0)",
    //         transitionDuration: "1s",
    //       },
    //       "& .MuiTypography-h5": {
    //         color: "primary.main",
    //         borderBottom: "1px solid ",
    //         margin: "1rem 0",
    //       },
    //       boxShadow:
    //         "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    //       transition: "transform 5s ease-in",
    //       height: "400px",
    //     },
    //     position: "relative",
    //     width: "100%",
    //     height: '400px'
    //   }}
    // >
    //   <CardMedia component="img" image={props.image} height={400} />
    //   <CardContent
    //     sx={{
    //       backgroundColor: "primary.main",
    //       height: "20px",
    //       transition: "transform 1s ease",
    //     }}
    //   >
    //     <Typography variant="h5" sx={{ color: "white.main", transform: 'translateY(-80px)' }}>
    //       {props.title}
    //     </Typography>
    //     <Typography
    //       gutterBottom
    //       variant="body2"
    //       sx={{
    //         visibility: "hidden",
    //         transition: ".2s ease",
    //         opacity: "0",
    //         transform: "translateY(20px)",
    //         color: 'white.main'
    //       }}
    //     >
    //       {props.desc}
    //     </Typography>
    //     {props.serviceList.map((item, idx) => (
    //       <Chip
    //         key={idx}
    //         label={item}
    //         variant="outlined"
    //         sx={{
    //           visibility: "hidden",
    //           transition: ".2s ease",
    //           opacity: "0",
    //           transform: "translateY(40px)",
    //           margin: "4px",
    //         }}
    //         color="primary"
    //       />
    //     ))}
    //   </CardContent>
    // </Card>
  );
};

export default GarageService;
