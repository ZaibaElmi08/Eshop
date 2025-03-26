import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/products" element={<ProductList />} /> 
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegistrationPage />} /> 

      </Routes>
    </Router>
  );
};

export default App;
