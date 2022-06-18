import React from "react";
import Detail from "../components/detail/Detail";
import Review from "../components/detail/Review";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const DetailPage = (props) => {


  return (
    <>
      <Detail />
      <Review />
    </>
  );
};

export default DetailPage;