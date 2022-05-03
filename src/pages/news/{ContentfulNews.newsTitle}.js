import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
import LineForm from "../../components/LineForm"
import ProductTypes from "../../components/ProductTypes"


const NewsTemplate = ({data}) => {

  const {newsTitle, newsDate, newsLink, newsLinkTitle, newsText, newsPicture} = data.contentfulNews
  let options = {day: 'numeric', month: 'long', year: 'numeric'}
  let date = new Date(newsDate)
  date = date.toLocaleString("ru", options)

  return (
    <>
      <Seo title={newsTitle} />
      <div className="newsPage">
        <div className="newsPage__wrapper">
          <h4 className="newsPage__title">{newsTitle}</h4>
          <div className="newsPage__content">
            <GatsbyImage alt={newsPicture.title} image={getImage(newsPicture.gatsbyImageData)}/>
            <div className="newsPage__info">
              <p className="newsPage__date">{date}</p>
              <p className="newsPage__text">{newsText.newsText}</p>
              <a href={newsLink} className="newsPage__link">{newsLinkTitle}</a>
            </div>
          </div>
        </div>
      </div>
      <LineForm />
      <ProductTypes />
    </>

  );
 }

 export const query = graphql`
    query getSingleNews($id: String) {
  contentfulNews(id: {eq: $id}) {
    newsTitle
    newsDate
    newsLink
    newsLinkTitle
    newsPicture {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      title
    }
    newsText {
      newsText
    }
  }
}
 `


export default NewsTemplate;