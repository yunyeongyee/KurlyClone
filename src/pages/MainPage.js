import React from 'react';
import styled from 'styled-components';
import SimpleImageSlider from 'react-simple-image-slider';
import Carousel from 'react-grid-carousel';
import {useNavigate} from 'react-router-dom';
import {getPosts, loadProductDB} from '../redux/modules/post'
import { useDispatch, useSelector } from 'react-redux';
import  {getposts} from '../redux/modules/post'




const MainPage = () => {

   const navigate = useNavigate();   
   const dispatch = useDispatch();

   const goDetail = () => {
      navigate('/detail/:Id');
   }

   // const product_list = useSelector((state)=> state.post)
   const [FirstLoad, setFirstLoad] = React.useState(true);
   // console.log(product_list)
   // React.useEffect( () => {
   //       dispatch(loadProductDB())
   // },[])
  
   React.useEffect (() => {
      dispatch(getPosts())
   },[])
   const product_list = useSelector((state)=> state.post.posts)
   console.log(product_list)

   function coma(price) {
      return parseInt(price).toLocaleString()
     }


   const bannerImg = [
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/5a5ecfbd-6615-4593-955f-2725c82134d7',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/c02c5036-df56-4cc8-b2b7-6e997e644008',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/bb14e79a-a0ff-4e5e-83a2-a1c06c48d4ae',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/2a6fa583-ef3d-48a5-a07f-593be0adc1b2',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/b3bd843e-c377-41f9-a054-dea26be0bb7a',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/39c28de9-2a7f-43bc-9e41-648befae3c95',
      },
      {
         url: 'https://img-cf.kurly.com/banner/main/pc/img/cc9e301f-bf05-42ca-889b-8d6d0777be4b',
      },
   ];
   
   return (
      <>
         <Section>
            <SimpleImageSlider
               width={'100%'}
               height={370}
               images={bannerImg}
               showBullets={true}
               showNavs={true}
               speed={500}
            />
         </Section>

         <Section2>
            <CarouselBox>
               <CarouselTitle>이 상품 어때요?</CarouselTitle>

               <Carousel rows={1} cols={4} gap={1}>
                  {product_list &&
                     product_list.map((val, i) => {
                        return (
                           <Carousel.Item key={i}>
                              <CartBtn
                                 src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"
                                 alt="상품 카트에 담기 아이콘"
                              />
                              <ImgBox>


                              <ProductImg
                                 src={val.image_url}
                                 onClick={() => {
                                    navigate('/detail/'+ val.productId)
                                 }}
                                 style={{
                                    margin: '0 10px',
                                    textAlign: 'center',
                                    lineHeight: '200px',
                                    width: '239px',
                                    height: '320px',
                                 }}
                              />
                              <Title>{val.title}</Title>
                              <Price>{coma(val.price)}원</Price>

                           </ImgBox>
                        </Carousel.Item>
                        
                     );
                  })}

               </Carousel>
               <Img src="https://img-cf.kurly.com/banner/random-band/pc/img/9a8968a6-bce6-498a-b2ad-35199762ff1c" />
            </CarouselBox>

         </Section2>
      </>
   );
};



const Section = styled.div`
   position: relative;
   top: 120px;
   margin: 50px auto;
`;

const Section2 = styled.div`
   position: relative;
   top: 100px;
   padding-bottom: 50px;
   margin: 100px auto;
`;
const CarouselBox = styled.div`
   width: 1090px;
   position: relative;
   margin: 50px auto;
`;

const CarouselTitle = styled.h2`
   font-size: 30px;
   display: flex;
   justify-content: center;
   position: relative;
   top: 20px;
   margin: auto;
   padding: 10px;
`;

const ImgBox = styled.div`
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

const ProductImg = styled.img`
   position: relative;
   top: 30px;
   margin: 100px auto;
   width: 100%;
   height: 100%;
   object-fit: cover;
   z-index: 2;
   transition: all 0.2s linear;
   &:hover {
      transform: scale(1.01);
      animation-iteration-count: 1;
   }
`;

const Title = styled.div`
   margin-top: 40px;
   margin-left: 10px;
   font-size: 15px;
   
`

const Price = styled.div`
   margin-top: 10px;
   margin-left: 10px;
   font-size: 15px;
   font-weight: bold;
`

const Img = styled.img`
   width: 1090px;
   margin: 100px auto;
   z-index: 2;
`;

const Btn = styled.button`
    background: #0000004e;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    padding: 8px 12px;

`;

const CartBtn = styled.img`
   position: relative;
   left: 195px;
   top: 345px;
   z-index: 3;

`
export default MainPage;
