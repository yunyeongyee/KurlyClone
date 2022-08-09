import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
/*COMPONENTS*/
import HoverList from './HoverList';
/*ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCart2, BsHeart } from 'react-icons/bs';

const Header = () => {
   const navigate = useNavigate();
   const token = localStorage.getItem('token');




   const goLogin = () => {
      navigate('/Login');
   };

   const goLogOut = () => {
      localStorage.removeItem("token");
      window.location.replace('/');
   };

   const goMain = () => {
      navigate('/');
   };

   const goSignUp = () => {
      navigate('/register');
   };

   const goCart = () => {
      navigate('/cart');

   }

   return (
      <>
         <Container>
            <Box>
               <UserMenu>
                  <img
                     style={{ cursor: 'pointer', float: 'left' }}
                     src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png"
                     width="121px"
                     height="22px"
                     margin="10px"
                     alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송"
                     onClick={goMain}
                  />

                  {!token ? (
                     <>
                        <Menu>
                           고객센터
                           <HoverList /> &nbsp;
                        </Menu>
                        <Menu onClick={goLogin}>로그인 &nbsp; |</Menu>
                        <Menu onClick={goSignUp}>회원가입 &nbsp; |</Menu>
                     </>
                  ) : (
                     <>
                        {/* <span>
               어서오세요. 누구님
               <ImgN
                  src="https://res.kurly.com/kurly/ico/2021/new_badge_28_28.png"
                  alt=""/>
            </span> */}
                        <Menu>
                           고객센터
                           <HoverList /> &nbsp;
                        </Menu>
                        <Menu onClick={goLogOut}>로그아웃 &nbsp; |</Menu>
                     </>
                  )}
               </UserMenu>

               <HeaderLogo>
                  <Logo
                     style={{ cursor: 'pointer' }}
                     src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
                     alt="마켓컬리 로고"
                     onClick={goMain}
                  />
               </HeaderLogo>

               <CategoryBox>
                  {/* <FontAwesomeIcon icon={farBars} /> */}

                  <Category>전체 카테고리</Category>

                  <Category>신상품</Category>
                  <Category>베스트</Category>
                  <Category>알뜰쇼핑</Category>
                  <Category>특가/혜택</Category>
                  <IconContainer>
                     <div>
                        <Input
                           type="text"
                           label="검색어"
                           placeholder="검색어를 입력해주세요."
                           autocomplete="off"
                           spellcheck="false"
                        />
                        <div style={{ position: 'absolute' }}>
                           <FontAwesomeIcon
                              icon={faMagnifyingGlass}
                              style={{
                                 position: 'relative',
                                 fontSize: '17px',
                                 left: 215,
                                 bottom: 27,
                              }}
                           />
                        </div>
                     </div>

                     {/* <HiOutlineLocationMarker
                        style={{
                           marginLeft: 15,
                           marginRight: 15,
                           width: 36,
                           height: 39,
                           fontWeight: 100,
                        }}
                     /> */}
                     <BsHeart
                        style={{
                           marginLeft: 15,
                           width: 33,
                           height: 32,
                           display: 'flex',
                           position: 'relative',
                           top: 3,
                        }}
                     />
                     <BsCart2
                        style={{ marginLeft: 15, width: 36, height: 36 }}
                        onClick={goCart}
                     />
                  </IconContainer>
               </CategoryBox>
            </Box>
         </Container>
      </>
   );
};

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
   box-shadow: 0 5px 5px -7px hsla(240, 20%, 28%, 0.15),
      0 3px 10px -10px hsla(0, 0%, 0%, 0.3),
      0 -6px 10px -10px hsla(0, 0%, 0%, 0.03);
`;
const Box = styled.div`
   background: #fff;
   min-height: 30px;
   display: block;
   position: fixed;
   top: 0;
   width: 100%;
   margin: 0 auto;
   z-index: 1;
`;

const UserMenu = styled.div`
   margin: 10px;
`;
const Menu = styled.span`
   display: inline;
   float: right;
   margin: 5px;
   font-size: 13px;
`;
const ImgN = styled.img`
   font-size: 5px;
   width: 10px;
   height: 10px;
   margin-top: 5px;
   margin-left: 3px;
`;
const HeaderLogo = styled.div``;

const Logo = styled.img`
   display: flex;
   margin: auto;
   align-items: center;
   width: 103px;
`;

const CategoryBox = styled.ul`
   display: flex;
   min-width: 1050px;
   justify-content: center;
   align-items: center;
   position: relative;
   font-family: 'Noto Sans';
   font-weight: bold;
   letter-spacing: -0.3px;
   z-index: 300;
`;

const Category = styled.li`
   list-style: none;
   display: flex;
   overflow: hidden;
   width: 124px;
   height: 50px;
   padding: 16px 0 0;
   font-size: 16px;
   color: #333;
   line-height: 20px;
   text-align: center;
   justify-content: center;

`;
const Icons = styled.div``;
const Input = styled.input`
   width: 242px;
   height: 35px;
   padding: 0 60px 0 14px;

   border: 1px solid #f7f7f6;
   border-radius: 18px;
   background-color: #f7f7f7;
   font-family: 'Noto Sans';
   font-weight: 400;
   font-size: 12px;
   color: #666;
   line-height: 15px;
   outline: none;
   -webkit-font-smoothing: antialiased;

`;

const IconContainer = styled.div`
   display: flex;
   justify-content: center;
   text-align: center;
`;
export default Header;
