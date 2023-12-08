import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";


import Signup from "./Components/Signup";
import Categories from "./Pages/Categories/Categories";
import Products from "./Pages/Shop/Products";
import About from "./Components/About";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  return (
    <BrowserRouter>
      {/* Place CategoryNavigation within a layout component */}
      <div>
        {/* <CategoryNavigation categories={categoriesData} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/category" element={<Category />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
