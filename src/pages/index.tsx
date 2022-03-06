import * as React from "react"
import { graphql } from "gatsby";

import Header from "../components/Header";
import Benefits from "../components/Benefits";
import AboutEstate from "../components/AboutEstate";
import Location from "../components/Location";
import AboutUs from "../components/AboutUs";
import FooterComponent from "../components/Footer";
import PreviousInvestmentComponent from "../components/PreviousInvestment";

interface IndexPageProps {
  data: {
    sliderImages: object,
    previousInvestmentImages: object,
  }
}
const IndexPage = ({data}: IndexPageProps) => {
  return (
    <>    
      <Header sliderImages={data.sliderImages}></Header>
      <Benefits></Benefits>
      <AboutEstate></AboutEstate>
      <Location></Location>
      <AboutUs></AboutUs>
      <PreviousInvestmentComponent previousInvestmentImages={data.previousInvestmentImages}></PreviousInvestmentComponent>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  sliderImages: allDatoCmsSlider {
    nodes {
      gallery {
        url
      }
      id
    }
  }
  previousInvestmentImages: allDatoCmsPreviousInvestment {
    nodes {
      id
      name
      featuredImage {
        url
      }
    }
  }
}
`