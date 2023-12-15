import React from 'react';
import Slider from './components/Slider';
import Header from './components/Header';
import HeroSwiper from './components/HeroSwiper';
import ProductYarn from './components/ProductYarn';
import ProductPackage from './components/ProductPackage';
import ProductAcc from './components/ProductAcc';
import ProductBest from './components/ProductBest';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Slider />
      <Header />
      <HeroSwiper />
      <ProductYarn />
      <ProductPackage />
      <ProductAcc />
      <ProductBest />
      <Footer />
    </div>
  );
}

export default App;
