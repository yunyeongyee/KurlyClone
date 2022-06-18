import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
   return (
      <>
         <SignUp>
            <BtnSignUpTxt>가입하기</BtnSignUpTxt>
         </SignUp>
      </>
   );
};

const BtnSignUpTxt = styled.span`
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   letter-spacing: -0.6px;
   font-size: 15px;
   color: #5f0080;
`;

export default SignUp;
