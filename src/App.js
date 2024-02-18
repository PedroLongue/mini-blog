import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
