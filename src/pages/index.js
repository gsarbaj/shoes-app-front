import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import Hero from "../components/Hero";
import ProductTypes from "../components/ProductTypes";
import News from "../components/News";
import Description from "../components/Description";
import LineForm from "../components/LineForm";
import FormSection from "../components/FormSection";
import Article from "../components/Article";

const IndexPage = () => {
  return (
    <>
      <Seo title={'Марко'}/>
      <Hero/>
      <ProductTypes/>
      <News/>
      <Description/>
      <LineForm/>
      <FormSection/>
      <Article/>
    </>
  )
}

export default IndexPage
