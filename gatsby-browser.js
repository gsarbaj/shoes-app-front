const React = require('react');
const { wrapPageElement } = require("gatsby/dist/utils/api-browser-docs");
const Layout = require('./src/components/Layout').default

exports.wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}