import React from 'react'
import Layout from '../Layout/Layout'
import heroImg from "../../assets/heroSchoolTransportation.jpg";
import Hero from '../../components/Hero';

const SchoolTransportation = () => {
  return (
    <Layout>
        <Hero
        image={heroImg}
        altTxt="School transportation in UAE"
        isFullWidthHero={false}
        title="School transports"
        description="Experience safe and reliable school transportation services with us. We prioritize the well-being of students by offering secure and comfortable rides to and from school. Our team of professional and experienced chauffeurs ensures timely pickups and drop-offs, providing parents and schools with peace of mind."
      />
    </Layout>
  )
}

export default SchoolTransportation