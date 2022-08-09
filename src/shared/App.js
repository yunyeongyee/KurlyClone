import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../shared/App.css'
import {db} from '../firebase';
//페이지 import
import MainPage from "../pages/MainPage"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import CartPage from "../pages/CartPage"
import DetailPage from "../pages/DetailPage"
import SearchPage from "../pages/SearchPage"
import ReviewWritePage from "../pages/ReviewWritePage"

//컴포넌트 import
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
/*Global CSS*/
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/register" element={<SignUpPage/>} />
        <Route exact path="/cart" element={<CartPage/>} />
        <Route exact path="/search" element={<SearchPage/>} />
        <Route exact path="/detail/:productId" element={<DetailPage/>} />
        <Route exact path="/detail/:productId/write" element={<ReviewWritePage/>} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
