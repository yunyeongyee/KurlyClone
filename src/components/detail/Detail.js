import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams, useLocation } from "react-router";
import axios from "axios";

import detail, { getDetail } from "../../redux/modules/detail";
import { BiMinus, BiPlus } from "react-icons/bi";

const Detail = (props) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let {postId} = useParams()
  console.log(productId);

  const [data, setData] = useState(null);
  const [number, setNumber] = useState(1);

  const min = () => {
    if (number <= 1) {
      window.alert("최소 주문 수량은 1개입니다.");
    } else setNumber(parseInt(number) - 1);
  };
  const max = () => {
    if (number >= 10) {
      window.alert("최대 주문 수량은 10개입니다.");
    } else setNumber(parseInt(number) + 1);
  };
  const addCart = () => {
    window.alert("장바구니에 상품을 담았습니다.");
    navigate("/");
  };


  React.useEffect(() => {
    axios
      .get("http://13.125.151.93/product/detail/" + productId)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);
  function coma(price) {
    return parseInt(price).toLocaleString();
  }


  return (
    <>
      <Section>
        <Div>
          <Img>
            <ImgSrc src={data && data.image_url} alt="" />
          </Img>

          <Fix>
            <Wrap>
              <InfoSection>
                <Wrapper>
                  <Strong>{data && data.title}</Strong>
                </Wrapper>
                <Content>{data && data.desc}</Content>
              </InfoSection>

              <div>
                <Price>
                  <Num>
                    {coma(data && data.price)}
                    <Won>원</Won>
                  </Num>
                </Price>

                <P>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</P>
              </div>

              <Tit>
                구매수량
                <SectionBtn>
                  <Box>
                    <BiMinus
                      onClick={min}
                      style={{
                        width: 20,
                        height: 20,
                        paddingLeft: 5,
                      }}
                    />

                    <label htmlFor="1">
                      <Input type="number" id="1" />
                      {number}
                    </label>

                    <BiPlus
                      onClick={max}
                      style={{
                        width: 20,
                        height: 20,
                        paddingRight: 5,
                      }}
                    />
                  </Box>
                </SectionBtn>
              </Tit>
              <Border />

              <Order>
                <div>
                  <Total>
                    총 상품금액 :
                    <Bold>{coma(data && data.price * number)}</Bold>원
                  </Total>
                  <Ho>
                    <IconPoint>적립</IconPoint>로그인 후,회원할인가와 적립혜택
                    적용
                  </Ho>
                  <Point>
                    <WrapIcon>
                      <LikeBtn />
                      <Alert />

                      <BtnContainer>
                        <Btn onClick={addCart}>장바구니 담기</Btn>
                      </BtnContainer>
                    </WrapIcon>
                  </Point>
                </div>
              </Order>
            </Wrap>
          </Fix>
        </Div>
      </Section>
    </>
  );
};

export default Detail;

const Container = styled.div`
  margin: 20px auto;
`;
const Section = styled.section`
  width: 1050px;
  margin: 20px auto;
  padding-top: 20px;
  display: flex;
`;

const Ho = styled.tr`
  /* margin-right: 50px; */
  padding: 0 5px;
`;

const IconPoint = styled.div`
  display: inline-block;
  width: 28px;
  height: 20px;
  margin-left: 315px;
  margin-right: 2px;
  border-radius: 10px;
  background-color: #ffbf00;
  font-weight: 700;
  font-size: 11px;
  color: #fff;
  line-height: 20px;
  text-align: center;
`;
const Total = styled.tr`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: right;
`;

const Point = styled.span`
  font-size: 15px;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 120px;
`;

const Bold = styled.span`
  display: flex;
  justify-content: right;
  font-weight: 900;
  font-size: 30px;
  line-height: 10px;
  margin-right: 2px;
  display: flex;
  color: #333;
  margin-bottom: 10px;
  margin-left: 15px;
`;

const Div = styled.div`
  padding: 30px 0 20px;
  color: #333;
  letter-spacing: 0;
  display: flex;
`;
const Order = styled.table`
  margin-bottom: 10px;
  padding: 10px;
  margin-right: 210px;
`;

const Tit = styled.span`
  display: flex;
  width: 900px;
  font-size: 14px;
  color: #666;
`;

const Con = styled.span`
  color: #333;
  letter-spacing: -0.5px;
  font-size: 15px;
  margin-left: 20px;
`;
const Border = styled.div`
  border-top: 0.2px solid gray;
  width: 550px;
  opacity: 20%;
  margin-top: 30px;
  margin-bottom: 20px;
`;
const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Wrapper = styled.div`

  display: flex;
`;

const Price = styled.div`
  width: 560px;
`;
const Num = styled.span`
  font-weight: 500;
  font-size: 30px;
  color: #333;
`;
const Won = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

const Img = styled.div`
  padding: 0 40px 0 0;
  display: flex;
  width: 430px;
  height: 552px;
`;

const P = styled.p`
  padding-top: 7px;
  font-size: 14px;
  color: #5f0080;
  line-height: 20px;
  letter-spacing: 0;
`;

const ImgSrc = styled.img`
  width: 430px;
  height: 552px;
  max-width: 100%;
`;

const Strong = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #333;
  margin-right: 219px;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 100px;
`;
const InfoSection = styled.section`
  padding: 0 0 29px 0;
`;
const Wrap = styled.div`
  margin-left: 40px;
`;
const Fix = styled.div`
  padding: 10px;
`;
const Content = styled.div`
  padding: 4px 60px 0 0;
  font-size: 14px;
  color: #999;
`;
const BtnContainer = styled.div`
  display: flex;
  width: 280px;
  height: 54px;
  border-radius: 3px;
  font-size: 0;
  text-align: center;
  background-color: #5f0080;
  margin-top: 20px;
`;
const Btn = styled.button`
  width: 432px;
  height: 56px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  background-color: #5f0081;
  border: 1px solid #5f0081;
  cursor: pointer;
`;
const LikeBtn = styled.button`
  width: 56px;
  height: 56px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: transparent !important;
  background: url(https://res.kurly.com/pc/service/pick/btn-itemdetail-like.svg)
    no-repeat center;
  background-size: 32px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 10px;
`;
const Alert = styled.button`
  background: url(https://res.kurly.com/pc/service/goodsview/btn-itemdetail-restock-dim.svg)
    no-repeat center;
  background-size: 32px;
  cursor: default;
  width: 56px;
  height: 56px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: transparent !important;
  margin-top: 20px;
  margin-right: 10px;
`;
const Input = styled.input`
  width: fit-content;
  display: none;
`;
const SectionBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  margin-left: 20px;
  width: 80px;
  height: 30px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BtnNum = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  color: #333;
  background-color: white;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  outline: none;
  cursor: pointer;
  font-size: 12px;
`;
