import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import heroImg from "../../assets/heroLimousine.jpg";
import Hero from "../../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { closeVideo, playVideo } from "../Slices/ButtonSlice";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import LimoVid from "../../assets/Limo.mp4";

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
          width: '70%',
          margin: "0",
          heightAuto: true
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
    </Layout>
  );
};

export default Limousine;
