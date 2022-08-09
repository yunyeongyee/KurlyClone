import React from "react";
import styled from 'styled-components';

/*COMPONENTS*/
import Detail from "../components/detail/Detail";
import Review from "../components/detail/Review";


const DetailPage = (props) => {


  return (
     <>
        <Detail />
        <Review />
     </>
  );
  
};

export default DetailPage;