import sclassMain from "../assets/sclass2022-1.jpg";
import sclassSub1 from "../assets/sclass2022-2.jpg";
import sclassSub2 from "../assets/sclass2022-3.jpg";
import rrcullmain from "../assets/rrcullmain.jpg";
import rrcullsub1 from "../assets/rrcullsub1.jpg";
import rrcullsub2 from "../assets/rrcullsub2.jpg";
import hiaceMain from "../assets/hiaceMain.jpg";
import hiaceSub1 from "../assets/hiaceSub1.jpg";
import hiaceSub2 from "../assets/hiaceSub2.jpg";

export const featuredCars = [
  {
    vName: "mercedes s class",
    imageSide: "left",
    model: "2022",
    company: "limousine",
    rating: [1, 2, 3, 4, 5],
    images: [
      {
        label: "sclass-main",
        imgPath: sclassMain,
      },
      {
        label: "Bird",
        imgPath: sclassSub1,
      },
      {
        label: "Bali, Indonesia",
        imgPath: sclassSub2,
      },
    ],
  },
  {
    vName: "Rolls Royce",
    imageSide: "right",
    model: "2022",
    company: "limousine",
    rating: [1, 2, 3, 4, 5],
    images: [
      {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath: rrcullmain,
      },
      {
        label: "Bird",
        imgPath: rrcullsub1,
      },
      {
        label: "Bali, Indonesia",
        imgPath: rrcullsub2,
      },
    ],
  },
  {
    vName: "Hiace",
    imageSide: "left",
    model: "2022",
    company: "Passenger transport",
    rating: [1, 2, 3],
    images: [
      {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath: hiaceMain,
      },
      {
        label: "Bird",
        imgPath: hiaceSub1,
      },
      {
        label: "Bali, Indonesia",
        imgPath: hiaceSub2,
      },
    ],
  },
];
