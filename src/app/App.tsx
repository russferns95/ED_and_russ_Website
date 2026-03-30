import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../pages/components/layout/Navbar/Navbar";
import Footer from "../pages/components/layout/Footer/Footer";

// Pages
import Home from "../pages/Home/Homepage.tsx";
import Landing from "../pages/Landing/Landing.tsx";
import About from "../pages/About/AboutPage";
import Contact from "../pages/Contact/Contact.tsx";
import Services from "../pages/Services/Services.tsx";
import Team from "../pages/Team/Team.tsx";
import TeamDetails from "../pages/TeamDetails/TeamDetails.tsx";
import Blog from "../pages/Blog/Blog.tsx";
import BlogPost from "../pages/BlogPost/BlogPost.tsx";
import Category from "../pages/Category/Category.tsx";

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

        {/* Team */}
        <Route path="/team" element={<Team />} />
        <Route path="/team/sandra-watson" element={<TeamDetails />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post" element={<BlogPost />} />

        {/* Category */}
        <Route path="/category" element={<Category />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;