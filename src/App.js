import './App.css';
import Navbar from './components/Navbar/Navbar';
import FAQs from './RoutingPages/FAQs/FAQs';
import ARBookDetails from './RoutingPages/ARBookDetails/ARBookDetails';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router basename='/ar-ditvi'>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ar-book-detail/:bookSlug" element={<ARBookDetails />} />
          <Route path="/faqs" element={<FAQs />} />

        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
