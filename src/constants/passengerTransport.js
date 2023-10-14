import staffTransportImage1 from "../assets/staffTransport__passengerTransport_1.jpg";
import staffTransportImage2 from "../assets/staffTransport__passengerTransport_2.jpg";
import transfersimage1 from "../assets/transfers_passengerTransport_1.jpg";
import transfersimage2 from "../assets/transfers_passengerTransport_2.jpg";
import sightSeeingImage1 from "../assets/sightSeeing_passengerTransports_1.jpg";
import sightSeeingImage2 from "../assets/sightSeeing_passengerTransports_2.jpg";
import toyoyaHiace from "../assets/toyoyaHiace.png";
import mitsubishiRosa from "../assets/mitsubishiRosa.png";
import toyotaCoaster from "../assets/toyotaCoaster.png";
import asokLeyland from "../assets/asokLeyland.png";

export const passengerTransport = {
  services: [
    {
      title: "Staff trasnport",
      description:
        "Our service involves arranging transportation facilities, such as buses, vans, and shuttles, to transport staff members from their residences to the workplace and back. We not only help in reducing the burden of commuting for employees but also contribute to improved punctuality and attendance, fostering a productive and cohesive work environment.",
      image1: staffTransportImage1,
      image2: staffTransportImage2,
    },
    {
      title: "Transfers",
      description:
        "Whether it's airport transfers, hotel pickups, or city-to-city travel, we ensure a convenient and hassle-free journey. We offer various options, including private car transfers, shuttle services, and public transportation, catering to diverse needs and preferences.",
      image1: transfersimage1,
      image2: transfersimage2,
    },
    {
      title: "Sight seeing",
      description:
        "Experience the wonders of sightseeing like never before with our premium sightseeing service. Embark on a captivating journey through the city's iconic landmarks, cultural hotspots, and hidden gems. Our professional chauffeurs will take you on a curated tour, providing expert insights and personalized attention along the way. ",
      image1: sightSeeingImage1,
      image2: sightSeeingImage2,
    },
  ],
  fleet: [
    {
      image: toyoyaHiace,
      title: "toyota hiace",
      rating: 4,
    },
    {
      image: mitsubishiRosa,
      title: "mitsubishi rosa",
      rating: 4,
    },
    {
      image: toyotaCoaster,
      title: "toyota coaster",
      rating: 4,
    },
    {
      image: asokLeyland,
      title: "ashok leyland",
      rating: 4,
    },
  ],
};
