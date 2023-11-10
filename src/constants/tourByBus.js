import TourInOmanImage1 from "../assets/omanTour__tourByBus_1.jpg";
import TourInOmanImage2 from "../assets/omanTour__tourByBus_2.jpg";
import TourInUaeImage1 from "../assets/uaeTour_TourByBus_1.jpg";
import TourInUaeImage2 from "../assets/uaeTour_TourByBus_2.png";
import mercedesSprinter11 from "../assets/mercedesSprinter11.png";
import mercedesSprinter16 from "../assets/mercedesSprinter16.png";
import kinglong35 from "../assets/kinglong352.png";
import kinglong50 from "../assets/kinglong50.png";
import yutong from "../assets/yutong.png";
import navigator from "../assets/navigator.png";

export const tourByBus = {
  services: [
    {
      title: "Tour in UAE",
      description:
        "Explore the dazzling wonders of the United Arab Emirates as our expert chauffeurs lead you through this captivating destination. From the gleaming skyscrapers of Dubai to the cultural heritage of Abu Dhabi, and from the pristine beaches of Fujairah to the majestic deserts of Sharjah, our thoughtfully curated tour showcases the very best of the UAE. Sit back and indulge in the comfort of our luxurious vehicles, where every moment is dedicated to your enjoyment and relaxation.",
      image1: TourInUaeImage1,
      image2: TourInUaeImage2, 
    },
    {
      title: "Tour in Oman",
      description:
        "Discover the captivating beauty and rich heritage of Oman as our professional chauffeurs guide you through this enchanting destination. From the majestic mountains to the golden sand dunes, and from the historic forts to the bustling souks, our carefully curated tour offers a seamless and luxurious experience.",
      image1: TourInOmanImage1,
      image2: TourInOmanImage2,
    },
  ],
  fleet: [
    {
      company: "Tour by Luxury Bus",
      image: mercedesSprinter11,
      title: "mercedes sprinter (11 seater)",
      rating: 4,
    },
    {
      company: "Tour by Luxury Bus",
      image: mercedesSprinter16,
      title: "mercedes sprinter (16 seater)",
      rating: 4,
    },
    {
      company: "Tour by Luxury Bus",
      image: kinglong35,
      title: "Kinglong (35 seater)",
      rating: 4,
    },
    {
      company: "Tour by Luxury Bus",
      image: kinglong50,
      title: "kinglong (50 seater)",
      rating: 4,
    },
    {
      company: "Tour by Luxury Bus",
      image: yutong,
      title: "yutong (50 seater)",
      rating: 4,
    },
    {
      company: "Tour by Luxury Bus",
      image: navigator,
      title: "navigator (50 seater)",
      rating: 4,
    },
  ],
};
