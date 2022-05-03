import React from "react";
import { Link, navigate } from "gatsby";
import { Pagination } from "antd";

const Pager = ({ pageContext }) => {

  const { previousPagePath, nextPagePath, limit, humanPageNumber, numberOfPages } = pageContext;
  console.log(pageContext);

  return (
    <>
      <Pagination
        defaultCurrent={1}
        total={numberOfPages * limit}
        current={humanPageNumber}
        onChange={
          (page) => {navigate(`/page/${page}`)}
        }
      />


      {previousPagePath && (
        <span><Link to={previousPagePath}>Previous</Link></span>
      )}
      {nextPagePath && (
        <span><Link to={nextPagePath}>Next</Link></span>
      )}
    </>
  );
};

export default Pager;