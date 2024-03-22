import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/Pages/HomePage";
import About from "./features/Pages/About";
import Contact from "./features/Pages/Contact";
import Limousine from "./features/Pages/Limousine";
import TourByLuxuryBus from "./features/Pages/TourByLuxuryBus";
import PassengerTransport from "./features/Pages/PassengerTransport";
import SchoolTransportation from "./features/Pages/SchoolTransportation";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Form from "./features/Pages/Form";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { closeForm } from "./features/Slices/HomepageSlice";
import Garage from "./features/Pages/Garage";

function App() {
  const popUpFormState = useSelector((state) => state.homepage.showForm);
  const company = useSelector((state) => state.homepage.companyVal);
  const alertForm = withReactContent(Swal);
  const dispatch = useDispatch();
  const submitFn = (values) => {
    Swal.fire({
      icon: "success",
      title: "Thank you!!",
      text: "We recieved your enquiry. One of our executives will contact you soon!!",
      confirmButtonColor: "#C53A50",
    }).then((res) => {
      if (res.isConfirmed || res.isDismissed) {
        window.location.reload();
      }
    });
  };
  useEffect(() => {
    !!popUpFormState &&
      alertForm
        .fire({
          html: (
            <Box sx={{ padding: "1rem", marginTop: "2rem", textAlign: "left" }}>
              <Form submit={submitFn} company={company} />
            </Box>
          ),
          showConfirmButton: false,
          showCloseButton: true,
        })
        .then((res) => {
          if (res.isDismissed) {
            dispatch(closeForm());
          }
        });
  }, [popUpFormState]);

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/limousine-service" element={<Limousine />} />
      <Route exact path="/tour-by-luxury-bus" element={<TourByLuxuryBus />} />
      <Route
        exact
        path="/passenger-transportation"
        element={<PassengerTransport />}
      />
      <Route
        exact
        path="/school-transportation"
        element={<SchoolTransportation />}
      />
      <Route exact path="/technical-center" element={<Garage />} />
    </Routes>
  );
}

export default App;
