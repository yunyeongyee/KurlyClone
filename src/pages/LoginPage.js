import React from 'react';
import styled from 'styled-components';

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {loginDB} from "../redux/modules/user";

const LoginPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate();
   const [id, SetId] = useState("");
   const [password, SetPassword] = useState("");

   const OnChangeId = (e) => {
      const idRegEx  = /^[a-z0-9]+$/
      const idCurrent = e.target.value
      SetId(e.target.value)
      if (!idRegEx.test(idCurrent)){

      }
   }

   const OnChangePassword = (e) => {
      // const password
      SetPassword(e.target.value)
   }

   let formData = {
      loginId: id,
      password: password,
    };

    function login() {
      dispatch(loginDB(formData));
      navigate("/");
    }
   



   return (
      <>
         <Container>
            <Caption>로그인</Caption>
            <Card>
               <Form>
                  <Input
                     onChange={OnChangeId}
                     type="text"
                     placeholder="아이디를 입력해주세요."
                     spellcheck="false"
                     data-ms-editor="true"
                  />
                  <Input
                     onChange={OnChangePassword}
                     type="password"
                     placeholder="비밀번호를 입력해주세요."
                  />
               </Form>
               <LinkCard>
                  <Link>아이디 찾기 &nbsp;</Link>
                  <span class="bar"></span>
                  <Link>| &nbsp;비밀번호 찾기</Link>
               </LinkCard>

               <LoginBtn onClick={login}>
                  <BtnLoginTxt>로그인</BtnLoginTxt>

               </LoginBtn>
               <SignUpBtn>
                  <BtnSignUpTxt>회원가입</BtnSignUpTxt>
               </SignUpBtn>
            </Card>
         </Container>
      </>
   ); 
};
const Container = styled.div`
   display: block;
   margin: 16em;
   text-align: center;
   position: relative;
   top: 40px;
`;

const Card = styled.div`
   display: inline-block;
   box-sizing: border-box;
   margin: 10px;
   padding: 0;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   margin: 0;
   padding: 0;
`;

const Caption = styled.h3`
   margin: 2em;
   text-align: center;
   color: #333;
   font-size: 28px;
`;

const Input = styled.input`
   width: 340px;
   height: 54px;
   margin: 5px 0;
   padding: 0 19px;
   border: 1px solid #ccc;
   border-radius: 3px;
   background-color: #fff;
   font-size: 14px;
   line-height: 20px;
   outline: none;
`;
const Link = styled.span``;
const LinkCard = styled.div`
   float: right;
   margin: 10px 0;
`;

const LoginBtn = styled.button`
   display: block;
   overflow: hidden;
   width: 100%;
   height: 54px;
   margin: 5px 0;
   border-radius: 3px;
   text-align: center;
   border: 1px solid #5f0081;
   background-color: #5f0080;
`;

const SignUpBtn = styled.button`
   display: block;
   overflow: hidden;
   width: 100%;
   height: 54px;
   border-radius: 3px;
   text-align: center;
   border: 1px solid #5f0081;
   background-color: #fff;
`;
const BtnLoginTxt = styled.span`
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   letter-spacing: -0.6px;
   font-size: 15px;
   color: #fff;
`;

const BtnSignUpTxt = styled.span`
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   letter-spacing: -0.6px;
   font-size: 15px;
   color: #5f0080;
`;

export default LoginPage;
