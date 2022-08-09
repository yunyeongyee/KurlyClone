import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch,  } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useParams } from "react-router";
import { db, storage } from '../firebase';
import axios from 'axios';


const ReviewWritePage = () => {
   const token = localStorage.getItem('token');
   const navigate = useNavigate();
   const { productId } = useParams();
   const [data, setData] = useState(null);
   

   const title_ref = React.useRef(null);
   const content_ref = React.useRef(null);
   const file_ref = React.useState(null);
   const file_link_ref = React.useRef(null);
   const [imageSrc, setImageSrc] = React.useState('');

   const [review, setReveiw] = React.useState({
      title: '',
      content: '',
   });
   // 이미지 미리보기
   const encodeFileToBase64 = (fileBlob) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      return new Promise((resolve) => {
         reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
         };
      });
   };

   // 파일 업로드하기
   const addReviewAxios = async (e) => {
 
      const uploaded_file = await uploadBytes(
         ref(storage, `images/${file_ref.current.files[0].name}`),

         file_ref.current.files[0]
      );

      const file_url = await getDownloadURL(uploaded_file.ref);
      // console.log(file_url);
      file_link_ref.current = { url: file_url };

      axios
         .post(
            'http://13.125.151.93/comment/'+`${productId}/add`,
            {
               "comment_image": file_link_ref.current?.url,
               "title": title_ref.current.value,
               "comment": content_ref.current.value,
            },
            { headers: { Authorization: `Bearer ${token}` } }
         )
         .then(function (response) {
            window.alert('후기 등록이 완료되었습니다.');
            navigate('/');
         })
         .catch(function (error) {
            const msg = error.response.data.message;
            window.alert(msg);
         });
         console.log('file_link_ref.current.url?', file_link_ref.current.url);
   };   
   // 상품 상세 이미지, 타이틀 가지고 오기
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



   return (
      <>
         <Container>
            <Caption>후기 작성</Caption>

            <Table>
               <thead>
                  <Tr>
                     <td>
                        <ImgContainer>
                           <Img
                              src={data && data.image_url}
                              alt=""
                           />
                        </ImgContainer>
                     </td>
                     <Title>{data && data.title}</Title>
                  </Tr>
               </thead>
               <tbody>
                  <Tr>
                     <SubTitle1> 제목</SubTitle1>
                     <td>
                        <SubInput
                           ref={title_ref}
                           type="text"
                           placeholder="제목을 입력해주세요"
                        />
                     </td>
                  </Tr>
                  <Tr>
                     <SubTitle2>후기작성</SubTitle2>
                     <td>
                        <SubTextarea
                           ref={content_ref}
                           type="content"
                           placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며, 일반 식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성시 검토 후 비공개 조치될 수 있습니다. 반품/환불 문의는 1:1문의로 가능합니다. "
                        />
                     </td>
                  </Tr>
                  <Tr>
                     <SubTitle3>사진등록</SubTitle3>
                     <td>

                        {/* <PhotoContainer>
                           <TbPlus 
                              style={{
                                 color: '#5f0080',
                                 margin: 'auto',
                                 width: 25,
                                 height: 25,
                                 position: 'relative',
                                 top: 25
                              }}
                           />
                        </PhotoContainer> */}
                        <div className="picture">
                           {imageSrc && (
                              <img src={imageSrc} alt="preview-img" />
                           )}
                        </div>
                        <input
                           type="file"
                           ref={file_ref}
                           style={{ display: 'block', margin: 30 }}

                        />

                        <PhotoTxt>
                           구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우,
                           통보없이 삭제 및 적립 혜택이 취소됩니다.
                        </PhotoTxt>
                     </td>
                  </Tr>
               </tbody>
            </Table>
            <Btn onClick={addReviewAxios}>
               <BtnTitle>등록하기</BtnTitle>
            </Btn>
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

const Caption = styled.h2`
   width: 800px;
   text-align: left;
   margin: 10px auto;
   padding-bottom: 10px;
   border-bottom: 2px solid #5f0080;
`;
const Table = styled.table`
   margin: auto;
   border-bottom: 1px solid #ddd;
`;
const ImgContainer = styled.div`
   overflow: hidden;
`

const Img = styled.img`
   width: 200px;
   height: 200px;
   margin: 20px;

`;

const InputFile = styled.input`
   
`

const Tr = styled.tr`
   border-bottom: 1px solid #ddd;
`;
const SubInput = styled.input`
   margin: 10px;
   width: 600px;
   height: 30px;
   font-size: 13px;
`;

const Title = styled.th`
   height: 50px;
   font-size: 17px;
   text-align: left;
   padding: 10px 30px;
   
`;
const SubTitle1 = styled.td`
   font-size: 13px;
   padding: 10px;
   background-color: #eee;
   width: 150px;
`;

const SubTitle2 = styled.td`
   font-size: 13px;
   padding: 10px;
   background-color: #eee;
`;

const SubTextarea = styled.textarea`
   overflow: hidden;
   resize:none;
   margin: 10px;
   width: 600px;
   height: 300px;
   font-size: 13px;
`;

const SubTitle3 = styled.td`
   font-size: 13px;
   padding: 10px;
   background-color: #eee;
`;

const PhotoContainer = styled.div`
   margin: 15px;
   width: 70px;
   height: 70px;
   border: 1px solid #eee;
`;

const PhotoIcon = styled.h2`
   display: inline-block;
   text-align: center;
   padding: auto;
   line-height: 65px;
   margin: auto;
   color: #5f0080;
   font-weight: 300;
`;

const PhotoTxt = styled.p`
   margin-left: 15px;
   text-align: left;
`

const Btn = styled.button`
   display: block;
   width: 250px;
   height: 50px;
   margin:70px auto;
   vertical-align: top;
   border: 1px solid #5f0080;
   border-radius: 3px;
   background-color: #fff;
   color: #5f0080;
`;

const BtnTitle = styled.p`
   color: #5f0080;
   font-weight: 500;
   font-size: 17px;
   margin: auto;
   align-items: center;
   justify-content: center;
`;
export default ReviewWritePage;
