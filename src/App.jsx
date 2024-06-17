import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import PrivacyPolicy from "./pages/PrivacyPolicy"
import RefundPolicy from './pages/Refund';
import Terms from './pages/Terms';
import Aboutus from "./pages/Aboutus"
const App = () => {
  return (
    <Router>
        <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation();
  const checkout = location.pathname.startsWith('/checkout');
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {!checkout && <Cursor/>}
      {/* {!checkout && <Navbar openNav={openNav} setOpenNav={setOpenNav} />}
      {!checkout && <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />} */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
   

        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/refundpolicy' element={<RefundPolicy />} />
        <Route path='/termsofservice' element={<Terms />} />
      </Routes>
      {!checkout && <Footer />}
    </>
  );
};

export default App;
