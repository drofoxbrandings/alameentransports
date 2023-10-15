import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import heroImg from "../../assets/heroLimousine.jpg";
import Hero from "../../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { closeVideo, playVideo } from "../Slices/ButtonSlice";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Box, Container, Grid, Typography } from "@mui/material";
import LimoVid from "../../assets/Limo.mp4";
import ServiceSection from "../../components/ServiceSection";
import { limousineService } from "../../constants/limousineService";
import FleetCard from "../../components/Cards/FleetCard";

const Limousine = () => {
  const dispatch = useDispatch(); 
  const videoSwal = withReactContent(Swal);
  const _rsVideoState = useSelector((state) => state.buttonAction.playId);
  useEffect(() => {
    if (_rsVideoState !== "" && _rsVideoState === "limo") {
      videoSwal
        .fire({
          html: (
            <Box>
              <video width="100%" controls autoPlay>
                <source src={LimoVid} type="video/mp4"></source>
              </video>
            </Box>
          ),
          allowOutsideClick: false,
          showConfirmButton: false,
          showCloseButton: true,
          width: "70%",
          margin: "0",
          heightAuto: true,
        })
        .then((res) => {
          if (res.isDismissed) {
            dispatch(closeVideo());
          }
        });
    }
  }, [_rsVideoState]);

  return (
    <Layout>
      <Hero
        image={heroImg}
        altTxt="luxury transportation services - abu dhabi"
        isFullWidthHero={false}
        title="Luxury Limousine"
        description="With a fleet of meticulously maintained, high-end vehicles and professional chauffeurs, our limousine services ensure seamless transportation for various occasions, including weddings, corporate events, airport transfers, and special celebrations"
        hasVideo={true}
        btnFn={() => dispatch(playVideo("limo"))}
      />
      <Container maxWidth="lg">
        {limousineService?.services?.map((item, index) => (
          <ServiceSection
            isTextleft={index % 2 === 0 ? false : true}
            key={index}
            description={item.description}
            title={item.title}
            image1={item.image1}
            image2={item.image2}
          />
        ))}
        <Grid container sx={{ margin: "2rem 0" }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ textTransform: "uppercase", marginBottom: "2rem" }}
            >
              Fleet
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {limousineService?.fleet?.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <FleetCard
                company={item.company}
                image={item.image}
                title={item.title}
                rating={item.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Limousine;
