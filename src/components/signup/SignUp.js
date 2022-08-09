import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <>
      <Register>회원가입</Register>
      <Card>
        <RequiredText>*필수입력사항</RequiredText>
        <Form>
          <IdWrap>
            <IdSpan>아이디</IdSpan>
            <IdInput type="text" placeholder="아이디를 입력해주세요." />
            <IdCheckBtn>중복체크</IdCheckBtn>
          </IdWrap>
          <PwdWrap>
            <PwSpan>비밀번호</PwSpan>
            <PwdInput type="text" placeholder="비밀번호를 입력해주세요." />
          </PwdWrap>
          <PwdCheckWrap>
            <PwCheckSpan>비밀번호확인</PwCheckSpan>
            <PwdCheckInput
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
            />
          </PwdCheckWrap>
          <AddressWrap>
            <AddressSpan>주소</AddressSpan>
            <AddressInput type="text" placeholder="주소를 입력해주세요." />
          </AddressWrap>
          <SignWrap>
            <SignUpBtn>가입하기</SignUpBtn>
          </SignWrap>
        </Form>
      </Card>
    </>
  );
};

export default SignUp;


const Card = styled.div`
  display: inline-block;
`;

const Register = styled.span`
  font-weight: bold;
  font-size: 23px;
`;
const RequiredText = styled.div`
  border-bottom: 3px solid black;
  font-weight: bold;
`;

const Form = styled.div`
  margin: 100px;
`;

const IdWrap = styled.div``;

const IdSpan = styled.span``;

const IdInput = styled.input``;

const IdCheckBtn = styled.button``;
const PwdWrap = styled.div``;
const PwSpan = styled.span``;

const PwdInput = styled.input``;

const PwdCheckWrap = styled.div``;
const PwCheckSpan = styled.span``;

const PwdCheckInput = styled.input``;

const AddressWrap = styled.div``;

const AddressSpan = styled.span``;

const AddressInput = styled.input``;

const SignWrap = styled.div``;

const SignUpBtn = styled.button``;
