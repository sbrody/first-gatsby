import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    // this makes use of the universal 'children' prop - which is anything that comes in between the <Layout> tags
    <Layout pageTitle="Home page">
      <p>I'm making this by following the Gatsby tutorial</p>
    </Layout>
  )
};

export default IndexPage
