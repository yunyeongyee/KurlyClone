import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import {useNavigate,useParams} from 'react-router-dom';
import { getReview } from "../../redux/modules/detail";




const Review = () => {


   const navigate = useNavigate();   
   const dispatch = useDispatch();
   const [itemList, setItemList] = useState([]);
   const [commentId, setcommentId] = useState(null);
   const [modal, setModal] = useState(false);
   const  {productId} = useParams()
   const token = localStorage.getItem("token");

//    const postDelete = () => {
//       axios.delete("http://13.125.151.93/comment" + props.state.existsposts[0].postId,
//           {
//               headers: { 'Authorization': `Bearer ${token}` }
//           }).then(function (response) {
//               console.log(response)
//               alert("삭제가 완료됐습니다!")
//               navigate('/')
//           }).catch(function (error) {
//               alert("본인이 작성한 게시물만 삭제할 수 있습니다.")
//               console.log(error.response.data)
//               console.log(error)
//           })
//   }


   const loginCheckDB = () => {
      if(token){
         navigate('/detail/'+`${productId}/write`)
      }
      else {
         alert('로그인을 해주세요!')
      }

      }
   React.useEffect (() => {
      dispatch(getReview())
   },[])

   const reviewList = useSelector((state)=> state.detail.reviewInfo)
   console.log(reviewList)



  return (
     <>
        <Container>
           <div>
              <Form>
                 <Title>
                    <Name>PRODUCT REVIEW</Name>

                    <Content>
                       <ContentTxt>
                          상품에 대한 문의를 남기는 공간입니다. 해당 게시판의
                          성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될
                          수 있습니다.
                       </ContentTxt>
                       <ContentTxt>
                          배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                          마이컬리 내1:1 문의에 남겨주세요.
                       </ContentTxt>
                    </Content>
                 </Title>

                 <Table>
                    <thead>
                       <tr>
                          <Info
                             style={{
                                width: '70px',
                                textAlign: 'center',
                             }}
                          >
                             번호
                          </Info>
                          <Info
                             style={{
                                width: '592px',
                                textAlign: 'center',
                             }}
                          >
                             제목
                          </Info>
                          <Info
                             style={{
                                width: '51px',
                                textAlign: 'center',
                             }}
                          ></Info>
                          <Info
                             style={{
                                width: '77px',
                                textAlign: 'left',
                             }}
                          >
                             작성자
                          </Info>
                          <Info
                             style={{
                                width: '100px',
                                textAlign: 'center',
                             }}
                          >
                             작성일
                          </Info>
                          <Info
                             style={{
                                width: '40px',
                                textAlign: 'center',
                             }}
                          >
                             도움
                          </Info>
                          <Info
                             style={{
                                width: '80px',
                                textAlign: 'center',
                             }}
                          >
                             조회
                          </Info>
                       </tr>
                    </thead>

                    <Tbody
                       onClick={() => {
                          setModal(!modal);
                       }}
                    >

                      
                       {reviewList&&reviewList.map((val, i) => {
                          return (
                             <>
                                <TbodyTr>
                                   <td
                                      style={{
                                         width: '70px',
                                         textAlign: 'center',
                                      }}
                                   >
                                      {val.productsId}
                                   </td>
                                   <td
                                      style={{
                                         width: '592px',
                                         textAlign: 'center',
                                      }}
                                   >
                                      {val.title}
                                   </td>
                                   <td></td>
                                   <td
                                      style={{
                                         width: '100px',
                                         textAlign: 'left',
                                      }}
                                   >
                                      {val.loginId}
                                   </td>
                                   <td
                                      style={{
                                         width: '100px',
                                         textAlign: 'center',
                                      }}
                                   >
                                      {/* {val.date} */}
                                   </td>
                                   <td
                                      style={{
                                         width: '40px',
                                         textAlign: 'center',
                                      }}
                                   >
                                      {/* {val.helped} */}
                                   </td>
                                   <td
                                      style={{
                                         width: '80px',
                                         textAlign: 'center',
                                      }}
                                   >
                                      {/* {val.view} */}
                                   </td>
                                </TbodyTr>
                          
                                   <tr>
                                      <td colspan={6}>
                                         {modal ? 
                                       <ModalContainer>
                                          <div><ReviewImage src={val.comment_image}/></div>  
                                          <div>{val.comment}</div>
                                          <DeleteBtn>삭제하기</DeleteBtn>
                                       </ModalContainer> : ''}

                                      </td>
                                   </tr>
                                </>
                             );
                          })}
                    </Tbody>
                 </Table>
                 <WriteBtnContainer>
                    <WriteBtn onClick={loginCheckDB}>후기쓰기</WriteBtn>
                 </WriteBtnContainer>
                 {/* <div>
              {post_list.map((item, idx) => {
                return <Comment name={name} key={idx} {...item} />;
              })}
            </div> */}
      
              </Form>
           </div>
        </Container>
     </>
  );
};

export default Review;



const Container = styled.div`
   display: flex;
   width: 600px;
   margin: 50px auto;
   padding-top: 20px;
   position: relative;
   right: 400px;
`;

const Form = styled.form`
  font-weight: 400;
  letter-spacing: 0;
`;

const Table = styled.table`
   width: 100%;
   height: 65.8px;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid #e2e2e2;
   border-top: 2px solid #522772;
   margin: 15px 0;
`;

const Info = styled.th`
  padding: 25px 0px 23px 0;
  line-height: 140%;
  letter-spacing: 0px;
  vertical-align: middle;
  font-size: 13px;
  color: #353535;
`;

const Title = styled.div`
  font-weight: 300;
  letter-spacing: 0;
  color: #4c4c4c;
  font-size: 12px;
`;

const Name = styled.h2`
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 5px;
`;

const Content = styled.div`
  position: relative;
  font-weight: 200;
  letter-spacing: 0;
`;

const ContentTxt = styled.li`
   width: 100%;
`;
const Tbody = styled.tbody`
   width: 100%;
   height: 60px;
   justify-content: space-between;
   align-items: center;
   margin: 15px 0;
   border-top: 1px solid #e2e2e2;
   border-bottom: 1px solid #e2e2e2;
`;

const TbodyTr = styled.tr`
   border-top: 1px solid #eee;
   border-bottom: 1px solid #eee;
   &:hover {
      background-color: #eee;
   }
`;
const WriteBtnContainer = styled.div`
   display: inline;
   width: 100px;
   height: 40px;
   text-align: center;
   cursor: pointer;
   margin-left: 1350px;
   position: relative;
   right: 80px;

`;

const WriteBtn = styled.button`
   margin: auto;
   color: #fff;
   border-style: none;
   background-color: #795b8f;
   padding: 10px;
   font-weight: 500;
   font-size: 12px;
   cursor: pointer;
`;

const ModalContainer = styled.div`
   width: 100%;
   margin: 20px;
`

const ReviewImage = styled.img`
   width: 300px;
   height: 200px;
`
const DeleteBtn = styled.button`
   width: 70px;
   height: 30px;
   border-radius: 3px;
`