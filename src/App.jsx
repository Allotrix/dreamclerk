import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Committees from './pages/Committees';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Secretariat from './pages/Secretariat';
import PrivacyPolicy from "./pages/PrivacyPolicy"
import RefundPolicy from './pages/Refund';
import Terms from './pages/Terms';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Itinerary from './pages/Itinerary';
import PaymentState from './contexts/PaymentContext';
import Agenda from './pages/Agenda';
import Register from './pages/Register';
import SponsorMore from './pages/SponsorMore';
const App = () => {
  return (
    <Router>
      <PaymentState>
        <MainApp />
      </PaymentState>
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
      {!checkout && <Navbar openNav={openNav} setOpenNav={setOpenNav} />}
      {!checkout && <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/secretariat' element={<Secretariat />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/committees' element={<Committees />} />
        <Route path='/committees/:comName' element={<Agenda />} />
        <Route path='/sponsors/:sponsorName' element={<SponsorMore />} />

        <Route path='/gallery' element={<Gallery />} />
        <Route path='/itinerary' element={<Itinerary />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/refundpolicy' element={<RefundPolicy />} />
        <Route path='/termsofservice' element={<Terms />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {!checkout && <Footer />}
    </>
  );
};

export default App;
