const { paginate } = require("gatsby-awesome-pagination");
const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const products = await graphql(`
    {
      allStrapiProduct {
        nodes {
          title
          id
        }
      }
    }
  `);

  const pathPrefix = ({ pageNumber, numberOfPages }) =>
    pageNumber === 0 ? '/page/1' : '/page'

  paginate({
    createPage,
    items: products.data.allStrapiProduct.nodes,
    itemsPerPage: 10,
    pathPrefix: pathPrefix,
    component: path.resolve(`src/templates/product.js`),

  });

};
