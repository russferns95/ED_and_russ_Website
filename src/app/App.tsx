import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../pages/components/layout/Navbar/Navbar";
import Footer from "../pages/components/layout/Footer/Footer";

import Home from "../pages/Home/Homepage";
import Landing from "../pages/Landing/Landing";
import About from "../pages/About/AboutPage";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";
import Team from "../pages/Team/Team";
import TeamDetails from "../pages/TeamDetails/TeamDetails";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/BlogPost/BlogPost";
import Category from "../pages/Category/Category";

import "../App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/sandra-watson" element={<TeamDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post" element={<BlogPost />} />
        <Route path="/category" element={<Category />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
