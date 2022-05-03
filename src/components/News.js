import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card, Space, Tag } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"

import transliterate from "../services/transliterate"
import slugify from 'slugify';

// let text = transliterate('Привет Женщина')
// text = slugify(text, {lower: true})

const News = () => {

  const data = useStaticQuery(graphql`
      {
          allContentfulNews(sort: {fields: newsDate, order: DESC}, limit: 3) {
              nodes {
                  newsTitle
                  newsDate
                  newsDescription
                  newsLink
                  newsLinkTitle
                  newsPicture {
                      gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
                      title
                  }
              }
          }
      }
  `)

  const { nodes: news } = data.allContentfulNews

  const newsRender = news.map((newsItem, index) => {
    let options = {day: 'numeric', month: 'long'}
    let date = new Date(newsItem.newsDate)
    date = date.toLocaleString("ru", options)
    return (
      <Card key={index}>
        <GatsbyImage alt={newsItem.newsPicture.title} image={getImage(newsItem.newsPicture.gatsbyImageData)}/>
        <Tag>{date}</Tag>
        <div className="news-item__info">
          <h3>{newsItem.newsTitle}</h3>
          <span>{newsItem.newsDescription}</span>
        </div>
        <Link to={`/news/${slugify(transliterate(newsItem.newsTitle), {lower: true, remove: /[*+~.()'"!:@%]/g})}`} className="news-item__link">
          Подробнее
          <ArrowRightOutlined />
        </Link>
      </Card>
    )
  })


  return (
    <section className={'news'}>
      <div className={'wrapper'}>
        <h2>Новости</h2>
        <Space direction={'horizontal'} >
          {newsRender}
        </Space>
      </div>
    </section>
  );
}


export default News;