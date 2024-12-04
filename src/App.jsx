import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Hobbies from './pages/Hobbies.jsx';
import Contact from './pages/Contacts.jsx';
import Education from './pages/Education.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;