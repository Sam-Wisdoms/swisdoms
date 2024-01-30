
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import About from "./components/about/About.jsx"
import Blog from "./components/blogs/Blog.jsx"
import ProjectGallery from "./components/projectGallery/ProjectGallery.jsx"
import Cv from "./components/cv/Cv.jsx"
import Contact from "./components/contact/Contact.jsx"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/projects" element={ <ProjectGallery /> } />
        <Route path="/cv" element={ <Cv /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </Router>
  )
}

export default App
