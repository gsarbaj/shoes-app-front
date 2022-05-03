import React from "react";
import { graphql } from "gatsby";

const CategoryTemplate = ({ data, pageContext } ) => {

  const products = data.allStrapiProduct.nodes

  const renderData = products.map((product, index) => {
   return (
     <div key={index}>
       <p>{product.strapi_id}</p>
       <p>{product.price_base}</p>
     </div>

   )
  })

  return (
    <>
      {renderData}
    </>
  );
};


export const query = graphql`
    query getProductsFilteredByCategory($url: String) {
        allStrapiProduct(filter: {type: {category: {url: {eq: $url}}}}) {
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
    }`

export default CategoryTemplate;