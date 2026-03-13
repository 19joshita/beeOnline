// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Service from "./screens/Service";
import Career from "./screens/Career";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import CyberSecurity from "./screens/CyberSecurity";



function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/service" element={<Service />} /> */}
          <Route path="/service/web" element={<Service/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="//cyber-security" element={<CyberSecurity/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;