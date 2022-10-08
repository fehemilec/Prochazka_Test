import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Horizontal from './components/pages/Horizontal';

import AdminLoginScreen from './screens/AdminLoginScreen';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';



function App() {


  return (
  
  
    <Router>  
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/horizontal' element={<Horizontal />} />   
          <Route path='/admin/login' element={<AdminLoginScreen />} />  
          <Route exact path="/products" element={<HomeScreen/>} />
          <Route exact path="/product/:id" element={<ProductScreen/>} />
          <Route exact path="/cart" element={<CartScreen/>} />
          <Route exact path="/shipping" element={<ShippingAddressScreen/>} />
          <Route exact path="/placeorder" element={<PlaceOrderScreen/>} />
          <Route exact path="/confirmation" element={<ConfirmationScreen/>} />

        </Routes>
      <Footer/>


    </Router>

     
  );
}

export default App;


