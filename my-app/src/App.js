import React from 'react';
// import NavOne from './NavOne/NavOne';
// import Category from './Categories/Category'
// import CarouselOne from './CarouselOne/CarouselOne';
// import LatestProduct from './LatestProduct/LatestProduct';
// import PopularProduct from './PopularSlide/PopularProduct';
// import Topbar from './Topbar';
// import Carousel from './Carousel';
// import LatestProduct from './LatestProduct';
// import Footer from './Footer/Footer';
import ProductDetail from './ProductByCategory/ProductDetail';
import {  Route,Routes } from 'react-router-dom';
import ProductBySingle from './ProductBySingle/ProductBySingle';
import HomePage from './HomePage/Home';
import ViewPage from './Redux/viewPage';
import OrderDetails from './Redux/OrderDetails';
import Login from './Redux/Login';
import Topbar from './Topbar';
import Register from './Redux/Register';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/order_page' element = {<OrderDetails />} />
        {/* <Route path='' element = {<ViewPage />} /> */}
        <Route path='/category/:category_id' element = {<ProductDetail />} />
        <Route path = '/product/:product_id' element = {<ProductBySingle />} />
        <Route path = '/cart/:product_id' element = {<ViewPage />} />
      </Routes>    
    </div>
  );
}

export default App;
