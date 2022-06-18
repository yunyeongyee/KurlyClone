import React from "react";
import { Routes, Route } from 'react-router-dom';

//페이지 import
import Main from "../pages/Main"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Cart from "../pages/Cart"
import Detail from "../pages/Detail"
import Search from "../pages/Search"
import ReviewWrite from "../pages/ReviewWrite"

//컴포넌트 import
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<SignUp/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/detail/:id" element={<Detail/>} />
        <Route exact path="/detail/:productId/write" element={<ReviewWrite/>} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
