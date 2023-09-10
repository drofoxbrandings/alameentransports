import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero";
import heroImg from "../../assets/heroPassengerTransportation.jpg";
import { closeVideo, playVideo } from "../Slices/ButtonSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Box } from "@mui/material";
import transportsVid from '../../assets/Transports.mp4'

const PassengerTransport = () => {
  const dispatch = useDispatch();
  const videoSwal = withReactContent(Swal);
  const _rsVideoState = useSelector((state) => state.buttonAction.playId);
  useEffect(() => {
    if (_rsVideoState !== "" && _rsVideoState === "transports") {
      videoSwal
        .fire({
          html: (
            <Box>
              <video width="100%" controls autoPlay>
                <source src={transportsVid} type="video/mp4"></source>
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
        altTxt="Passenger transportation in UAE"
        isFullWidthHero={false}
        title="Passenger transports"
        description="Whether for daily commuting, travel, or special events, we plays a crucial role in connecting communities, and cities, making it possible for individuals to access work, education, leisure, and other essential activities. With a focus on safety, convenience, and efficiency, our services ensure that people can reach their destinations comfortably and on time."
        hasVideo={true}
        btnFn={() => dispatch(playVideo("transports"))}
      />
    </Layout>
  );
};

export default PassengerTransport;
