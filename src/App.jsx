import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './pages/Navbar';
import { LandingPage } from './pages/LandingPage';
import { About } from './pages/About';
import { Galery } from './pages/Galery';
import { FAQ } from './pages/FAQ';
import { Footer } from './pages/Footer';
import './styles/globalStyle.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
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