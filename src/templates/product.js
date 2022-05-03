import React from "react";
import { graphql } from "gatsby";
import Pager from "../components/Pager";

const Product = ({ data, pageContext }) => {

  const products = data.allStrapiProduct.nodes;

  const renderData = products.map((product, index) => {
    return (
      <div key={index}>
        <p>{product.strapi_id}</p>
        <p>{product.price_base}</p>
      </div>

    );
  });

  return (
    <>
      {renderData}
      <Pager pageContext={pageContext} />
    </>
  );
};

export const query = graphql`
    query getProductByCategory($url: String, $skip: Int!, $limit: Int!) {
  allStrapiProduct(
    skip: $skip
    limit: $limit
    filter: {type: {category: {url: {eq: $url}}}}
  ) {
    nodes {
      strapi_id
      price_base
      title
      product_id
      brand {
        name
      }
      vat_pct
      pictures {
        localFile {
          childrenImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`;


export default Product;