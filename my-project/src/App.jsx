import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";


import Signup from "./Components/Signup";
// import Categories from "./Pages/Categories/Categories";
import Products from "./Pages/Shop/Products";
import About from "./Components/About";
import ShoppingCart from "./Components/ShoppingCart"
import ProductDetails from "./Pages/Shop/ProductDetails";

function App() {

  return (
    <BrowserRouter>
      
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/categories" element={<Categories />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Productdetails/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
