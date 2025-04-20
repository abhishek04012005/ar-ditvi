import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Contact from './components/Contact/Contact';
// import ArBooks from './components/ArBooks/ArBooks';
// import Testimonials from './components/Testimonials/Testimonials';
// import WhyAR from './components/WhyAR/WhyAR';
// import FAQs from './RoutingPages/FAQs/FAQs';
// import Hero from './components/Hero/Hero';
import ARBookDetails from './RoutingPages/ARBookDetails/ARBookDetails';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

      <Router basename='/'>
        <div className="App">

          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ar-book-detail" element={<ARBookDetails />} />

          </Routes>
          <Footer />

        </div>
      </Router>
  );
}

export default App;
