import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/Seo"
import slugify from "slugify"
import transliterate from "../../services/transliterate"
import { ArrowRightOutlined } from "@ant-design/icons"
import { Card, Tag } from "antd"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
      query AllNewsShort {
          allContentfulNews(sort: {fields: newsDate, order: DESC}) {
              nodes {
                  newsDescription
                  newsDate
                  newsTitle
              }
          }
      }
  `)

  const { nodes: newsList } = data.allContentfulNews




  const newsRender = newsList.map((news, index) => {

    let options = {day: 'numeric', month: 'long', year: 'numeric'}
    let date = new Date(news.newsDate)
    date = date.toLocaleString("ru", options)

    return(
      <li key={index} className="newsList__item">
        <Card type="inner" title={news.newsTitle} extra={<Link to={`/news/${slugify(transliterate(news.newsTitle), {lower: true, remove: /[*+~.()'"!:@%]/g})}`}>Подробнее</Link>}>
          <p>{news.newsDescription}</p>
          <Tag className="newsList__date">{date}</Tag>
        </Card>
      </li>
    )
  })

  console.log(newsList)

  return (
    <>
      <Seo title={'Новости'} />
      <div className="newsList">
        <ul className="newsList__wrapper">
          {newsRender}
        </ul>
      </div>
    </>

  );
}




export default IndexPage;
