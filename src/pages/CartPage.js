import React from 'react';
import styled from 'styled-components';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import './CartPage.css'
const CartPage = () => {
   return (
      <>
         <Container>
            <Caption>장바구니</Caption>

            <Main>
               <Section>
                  <div class="round">
                     <input type="checkbox" checked id="checkbox" />
                     <label for="checkbox" />
                  </div>
                  <Txt>
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 전체선택(0/0) &nbsp; |
                     &nbsp; 선택삭제
                  </Txt>
                  <hr />
               </Section>
               <Aside>
                  <Table1>
                     <tr>
                        <Tb1Title>
                           <HiOutlineLocationMarker
                              style={{
                                 width: 25,
                                 height: 25,
                                 fontWeight: 100,
                              }}
                           />
                           배송지
                           <br />
                           배송지를 입력하고 배송유형을 확인해보세요!
                        </Tb1Title>
                     </tr>
                     <BtnAddress>
                        <BtnTitle>배송지 변경</BtnTitle>
                     </BtnAddress>
                  </Table1>

                  <Table2>
                     <tr>
                        <Title>상품금액</Title>
                        <Sub>0원</Sub>
                     </tr>
                     <tr>
                        <Title>상품할인금액</Title>
                        <Sub>0원</Sub>
                     </tr>
                     <tr>
                        <Title>배송비</Title>
                        <Sub>0원</Sub>
                     </tr>
                     <tr>
                        <Title>결제예정금액</Title>
                        <Sub>0원</Sub>
                     </tr>
                  </Table2>
                  <BtnProduct>
                     <BtnPdTitle>상품을 담아주세요</BtnPdTitle>
                  </BtnProduct>
               </Aside>
            </Main>
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

const Caption = styled.h3`
   margin: 2em;
   text-align: center;
   color: #333;
   font-size: 28px;
`;

const Main = styled.main`
display: flex;
margin: auto;
`;

const Section = styled.section`
   display: block;
   width: 70%;
`;

const Txt = styled.h5`
   text-align: left;
   font-weight: 400;
   font-size: 17px;
`;

const Aside = styled.aside`
   display: block;
   width: 30%;
   box-sizing: border-box;
   margin: 10px;
   padding: 10px;
`;

const Table1 = styled.table`
   border: 1px solid #fafafa;
   width: 350px;

`;
const Tb1Title = styled.h5`
   text-align: left;
   margin: 10px;
   padding: 10px;
   font-weight: 400;
   font-size: 17px;
`;

const Table2 = styled.table`
   background-color: #fafafa;
   width: 350px;
`;
const Title = styled.td`
   margin: 10px;
   padding-left: 30px;
   width: 130px;
   height: 50px;
   font-weight: 400;
   font-size: 17px;
   text-align: left;
`;

const Sub = styled.td`
   margin: 10px;
   display: block;
   width: 200px;
   height: 60px;
   text-align: right;
   position: relative;
   top: 15px;
   font-size: 15px;
   padding-right: 15px;
`;

const BtnAddress = styled.button`
   display: inline-block;
   width: 244px;
   height: 40px;
   margin: 20px auto;
   vertical-align: top;
   border: 1px solid #5f0080;
   border-radius: 3px;
   background-color: #fff;
   color: #5f0080;

`;

const BtnTitle = styled.p`
   color: #5f0080;
   font-weight: 500;
   font-size: 14px;
   margin: auto;
   align-items: center;
   justify-content: center;
`;

const BtnProduct = styled.button`
   display: block;
   width: 350px;
   height: 60px;
   margin: 20px auto;
   vertical-align: top;
   border: 1px solid #5f0080;
   border-radius: 3px;
   background-color: #fff;
   color: #5f0080;

`;

const BtnPdTitle = styled.p`
   color: #5f0080;
   font-weight: 500;
   font-size: 17px;
   margin: auto;
   align-items: center;
   justify-content: center;
`;
export default CartPage;