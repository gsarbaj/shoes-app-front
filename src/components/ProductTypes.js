import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProductTypes = () => {

  const data = useStaticQuery(graphql`
      {
          allStrapiCategory {
              nodes {
                  title
                  url
                  icon {
                      localFile {
                          childrenImageSharp {
                              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, quality: 100)
                          }
                      }
                  }
                  qty
              }
          }
      }
  `);

  const { nodes: categories } = data.allStrapiCategory;


  const categoryRender = categories.map((category, index) => {

    const img = category.icon.localFile.childrenImageSharp[0].gatsbyImageData;

    const { url } = category;


    return (
      <li key={index}>
        <Link to={`/catalog/${url}/`}>
          <GatsbyImage alt={category.title} image={img} />
          <h3 className="product-heading">{category.title}</h3>
          <p>Более {category.qty} моделей</p>
        </Link>
      </li>
    );
  });

  return (
    <section className="products">

      <div className={"wrapper"}>
        <ul className="productsList">
          {categoryRender}
        </ul>
      </div>
    </section>
  );
};

export default ProductTypes;