import React from 'react';
import Seo from "../../components/Seo"
import ProductTypes from "../../components/ProductTypes"

const IndexPage = props => {
  return (
    <>
      <Seo title={'Каталог'} />
      <ProductTypes />

    </>
  );
}


export default IndexPage;