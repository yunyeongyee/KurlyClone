import React from 'react';
import { Routes, Route } from 'react-router-dom';
/*COMPONENTS*/
import Header from '../components/header/Header';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';
import ReviewWrite from '../pages/ReviewWrite';
import Search from '../pages/Search';

/*CSS*/
import './App.css';

function App() {
   return (
      <div className="App">
         <Header />

         <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/ReviewWrite" element={<ReviewWrite />} />
            <Route path="/Search" element={<Search />} />
         </Routes>
      </div>
   );
}

export default App;
