import React from "react";
import { Routes,Route } from "react-router-dom";
// pages
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductPage from "../pages/ProductPage/ProductPage";
import ShoppingCart from './../pages/Cart/ShoppingCart';
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const Main = () => {
  return (
    <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ProductPage />} />

          <Route path="*" element={<h2>not Found.</h2>} />
        </Routes>
      
    </main>
  );
};

export default Main;
