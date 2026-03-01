import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/user/Home";
import Categories from "../pages/user/Categories";
import Login from "../pages/user/auth/Login";
import NotFound from "../pages/NotFound";
import Shops from "../pages/user/Shops";
import ShopDetails from "../pages/user/ShopDetails";
import Offers from "../pages/user/Offers";
import CompareProducts from "../pages/user/CompareProducts";
import Register from "../pages/user/auth/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Footer from "../components/Footer";
import Electronics from "../pages/Electronics";
import Dashboard from "../pages/user/Dashboard";
import Clothing from "../pages/Clothing";
import Grocery from "../pages/Grocery";
import Footwear from "../pages/Footwear";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/Shops" element={<Shops />} />
          <Route path="/shops/:shopId" element={<ShopDetails />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/compare" element={<CompareProducts />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/footer" element={<Footer />} />
        </Route>

        {/* Auth Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
