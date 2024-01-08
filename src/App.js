import './App.css';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Videos from './components/Videos/Videos';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AnimatePresence>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/videos" element={<Videos/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      </AnimatePresence>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
