import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import PageLanding from './pages/PageLanding';
import About from './pages/About';
import Galery from './pages/Galery';
import FAQ from './pages/FAQ';
import Footer from './pages/Footer';
import './styles/globalStyle.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageLanding/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/galery" element={<Galery/>} />
          <Route path="/faq" element={<FAQ/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;