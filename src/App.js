import './App.css';
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import Body from './routing/body/Body.js'
import Contact from './routing/contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
