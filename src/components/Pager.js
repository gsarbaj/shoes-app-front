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

    </>
  );
};

export default Pager;