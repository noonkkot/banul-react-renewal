import React from 'react';
import Slider from './components/Slider';
import Header from './components/Header';
import HeroSwiper from './components/HeroSwiper';
import Channel from './components/Channel';
import ProductYarn from './components/ProductYarn';
import ProductPackage from './components/ProductPackage';
import ProductAcc from './components/ProductAcc';
import ProductBest from './components/ProductBest';
import Footer from './components/Footer';
import Kimdaeri from './components/Kimdaeri';
import YouTubeChannelVideo from './components/YoutubeVideo';
import YouTubePlayer from './components/YouTubePlayer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Slider />
      <Header />
      <HeroSwiper />
      {/* <Channel /> */}
      {/* <YouTubePlayer /> */}
      {/* <Kimdaeri /> */}
      <ProductYarn />
      <ProductPackage />
      <ProductAcc />
      <ProductBest />
      <Footer />
      {/* <YouTubeChannelVideo /> */}
    </div>
  );
}

export default App;
