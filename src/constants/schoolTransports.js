import childToSchoolImage1 from "../assets/childToSchool__schooltransport_1.jpg";
import childToSchoolImage2 from "../assets/childToSchool__schooltransport_2.jpg";
import sbCoaster from "../assets/sbCoaster.png";
import sbAsokLeyland from "../assets/sbAsokLeyland.png";

export const schooltransport = {
  services: [
    {
      title: "CHILD TO SCHOOL / ACADEMICS / SPORTS",
      description:
        "At AAT, we take pride in providing exceptional transportation solutions for children's school, academics, and sports needs. Safety and reliability are our top priorities, and our team of experienced chauffeurs ensures that young passengers are in safe hands throughout their journey. Whether it's daily school pickups and drop-offs, transportation to academic events or extracurricular activities, or sports practices and games, our fleet of well-equipped vehicles offers a comfortable and secure ride.",
      image1: childToSchoolImage1,
      image2: childToSchoolImage2,
    },
  ],
  fleet: [
    {
      company: 'School transport',
      image: sbCoaster,
      title: "toyota coaster",
      rating: 4,
    },
    {
      company: 'School transport',
      image: sbAsokLeyland,
      title: "ashok leyland",
      rating: 4,
    },
  ],
};
