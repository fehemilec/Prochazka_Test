import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Horizontal from './components/pages/Horizontal'; 
import Vertikalni from './components/pages/Vertikalni';
import Rolety from './components/pages/Rolety';
import LatkoveRolety from './components/pages/LatkoveRolety';
import OkenniSite from './components/pages/OkenniSite';
import DverniSite from './components/pages/DverniSite';
import ServisOpravy from './components/pages/ServisOpravy';
import AdminLoginScreen from './screens/AdminLoginScreen';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import AdminOrderScreen from './screens/AdminOrderScreen';
import AdminOrderDetailsScreen from './screens/AdminOrderDetailsScreen';


function App() {


  return (
  
  
    <Router>  
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/horizontal' element={<Horizontal />} />   
          <Route path='/vertikalni' element={<Vertikalni />} />   
          <Route path='/rolety' element={<Rolety />} />   
          <Route path='/latkove-rolety' element={<LatkoveRolety />} /> 
          <Route path='/okenni-site' element={<OkenniSite />} /> 
          <Route path='/dverni-site' element={<DverniSite />} /> 
          <Route path='/servis-opravy' element={<ServisOpravy />} /> 
          <Route path='/admin/login' element={<AdminLoginScreen />} />  
          <Route exact path="/products" element={<HomeScreen/>} />
          <Route exact path="/product/:id" element={<ProductScreen/>} />
          <Route exact path="/cart" element={<CartScreen/>} />
          <Route exact path="/shipping" element={<ShippingAddressScreen/>} />
          <Route exact path="/placeorder" element={<PlaceOrderScreen/>} />
          <Route exact path="/confirmation" element={<ConfirmationScreen/>} />
          <Route exact path="/orders" element={<AdminOrderScreen/>} />
          <Route exact path="/orders/order/:id" element={<AdminOrderDetailsScreen/>} />

        </Routes>
      <Footer/>


    </Router>

     
  );
}

export default App;


