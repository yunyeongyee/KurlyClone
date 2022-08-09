
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpDB, idCheckDB} from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';


import SignUp from '../components/signup/SignUp';



const SignUpPage = () => {

 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 아이디 확인
  const [id, SetId] = useState("");
  // 이름 확인
  const [nickname, SetNickname] = useState("");
  // 패스워드 확인
  const [password, SetPassword] = useState("");
  // 패스워드 다시 확인
  const [passwordCheck, SetPasswordCheck] = useState("");
  // 주소 확인
  const [address, SetAddress] = useState("");
  const [openPostcode, setOpenPostcode] = useState(false);

  // 아이디 유효성 검사
  const [isEmail, setIsEmail] = useState(false)
  // 아이디 중복 검사
  const [overlapEmail,setOverlapEmail] = useState(false)
  // 패스워드 유효성 검사
  const [isPassword, setIsPassword] = useState(false)
  // 패스워드 확인 검사
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  

   

const [showAddress, setShowAddress] = useState('');
const [showZonecode, setShowZonecode] = useState('');
  // 카카오 주소 API
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
        setOpenPostcode(current => !current);
    },


    // 주소 선택 이벤트
    selectAddress: (data) => {
      setShowAddress(data.address);
      setShowZonecode(data.zonecode);
        console.log(`
            주소: ${data.address},
            우편번호: ${data.zonecode}
        `);
        setOpenPostcode(false);
        
        
    },  

} 

// console.log(address_test);

  const OnChangeId = (e) => {
    SetId(e.target.value);
  };
  const OnChangeNickname = (e) => {
    SetNickname(e.target.value);
  };
  const OnChangePassword = (e) => {
    SetPassword(e.target.value);
  };
  const OnChangePasswordCheck = (e) => {
    SetPasswordCheck(e.target.value);
  };
  const OnChangeAddress = (e) => {
    SetAddress(e.target.value);
    console.log(address)
  };

  // 보낼 데이터
  let formRegister = {
    "loginId": id,
    "password": password,
    "passwordcheck": passwordCheck,
    "nickname": nickname,
    "address": showAddress + " " + showZonecode
  };
  // 성공함
  // const signUp = async () => {
  //    await axios
  //        .post('http://localhost:5001/list',{
  //          "loginId" : id,
  //          "nickname" : nickname,
  //          "password" : password
  //        })
  //        .then((response) => {
  //            console.log(response)
  //            window.alert("회원가입이 완료되었습니다.")
  //            navigate('/')
  //        })
  //        .catch((error) => {
  //            console.log(error)
  //            window.alert("에러!")
  //        })
  // }

  function signUp() {
    dispatch(signUpDB(formRegister));
    navigate("/");
  }

  let idForm = {
    "loginId": id,
  }
  function idCheck() {
    dispatch(idCheckDB(idForm))
  }

  // const IdOverlapCheck = async () => {
  //   await axios
  // }

  return (
     <>
        <Container>
           <Caption>회원가입</Caption>

           <Table>
              <tr>
                 <Title>아이디</Title>
                 <Sub>
                    <Input
                       maxLength={16}
                       name="loginId"
                       onChange={OnChangeId}
                       type="text"
                       placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                       spellcheck="false"
                       data-ms-editor="true"
                    />
                 </Sub>
                 <Sub>
                    <BtnOutline onClick={idCheck}>
                       <BtnTitle>중복확인</BtnTitle>
                    </BtnOutline>
                 </Sub>
              </tr>
              <tr>
                 <td></td>
                 <Sub>
                    <SubTxt>
                       • 6자 이상의 영문 혹은 영문과 숫자를 조합
                       <br /> • 아이디 중복확인
                    </SubTxt>
                 </Sub>
              </tr>
              <tr>
                 <Title>닉네임</Title>
                 <Sub>
                    <Input
                       name="nickname"
                       onChange={OnChangeNickname}
                       type="text"
                       placeholder="닉네임을 입력해주세요"
                       spellcheck="false"
                       data-ms-editor="true"
                    />
                 </Sub>
                 <td></td>
              </tr>

              <tr>
                 <Title>비밀번호</Title>
                 <Sub>
                    <Input
                       name="password"
                       onChange={OnChangePassword}
                       type="password"
                       placeholder="비밀번호를 입력해주세요"
                    />
                 </Sub>
                 <td></td>
              </tr>
              <tr>
                 <Title>비밀번호확인</Title>
                 <Sub>
                    <Input
                       onChange={OnChangePasswordCheck}
                       type="password"
                       placeholder="비밀번호를 한번 더 입력해주세요"
                    />
                 </Sub>
                 <td></td>
              </tr>
              <tr>
                 <Title>주소</Title>
                 <Sub>
                    <p>
                       우편번호: {showZonecode} <br />
                       주소: {showAddress}
                    </p>
                    <BtnAddress onClick={handle.clickButton}>
                       {openPostcode && (
                          <DaumPostcode
                             onChange={OnChangeAddress}
                             onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                             autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                             defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
                             style={{ position: 'relative', zIndex: 10 }}
                          />
                       )}
                       <BtnTitle>주소 검색</BtnTitle>
                    </BtnAddress>
                 </Sub>
                 <td></td>
              </tr>

              <tr>
                 <td></td>
                 <BtnContainer>
                    <BtnSignUp onClick={signUp}>
                       <BtnSignTxt>가입하기</BtnSignTxt>
                    </BtnSignUp>
                 </BtnContainer>
              </tr>
           </Table>
        </Container>
     </>
  );
};
const Container = styled.div`
  margin: 16em;
  position: relative;
  top: 40px;

`;

const Table = styled.table`
  margin: auto;
`;

const Caption = styled.h3`

   display: block;
   margin: 2em;
   text-align: center;
   color: #333;
   font-size: 28px;
`;

const Title = styled.td`
   display: block;
   width: 130px;
   height: 60px;
   position: relative;
   top: 15px;
   font-weight: 500;
   font-size: 15px;
`;
const Sub = styled.td`
   width: 150px;
   height: 60px;
   position: relative;
   left: 5px;
   padding: 10px auto;
`


const Input = styled.input`
  width: 332px;
  height: 44px;
  margin: 5px 0;
  padding: 0 19px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  font-size: 15px;
  line-height: 20px;
  outline: none;
`;

const SubTxt = styled.p`
  position: relative;
  bottom: 5px;
  font-size: 13px;
`;

const BtnOutline = styled.button`
  display: inline-block;
  width: 120px;
  height: 44px;
  margin-left: 5px;
  vertical-align: top;
  border: 1px solid #5f0080;
  border-radius: 3px;
  background-color: #fff;
  color: #5f0080;
`;
const BtnAddress = styled.button`
  display: inline-block;
  width: 332px;
  height: 44px;
  margin-left: 3px;
  vertical-align: top;
  border: 1px solid #5f0080;
  border-radius: 3px;
  background-color: #fff;
  color: #5f0080;
`;

const BtnTitle = styled.p`
  color: #5f0080;
  font-weight: bold;
  font-size: 15px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const BtnContainer = styled.td`
   z-index: 2;
   position: relative;
   top: 50px;
   left: 7px;
`

const BtnSignUp = styled.button`
   z-index: 2;
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

const BtnSignTxt = styled.span`
   z-index: 2;
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   letter-spacing: -0.6px;
   font-size: 15px;
   color: #fff;
`;



export default SignUpPage;
