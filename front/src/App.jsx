import './Reset.css'
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './ScrollToTop';
import AboutPage from './pages/AboutPage';





const App = () => {
  return (

    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product/:id' element={<ProductPage />} />

      </Routes>

      <Footer />

    </>
  );
};

export default App;