
import { BrowserRouter as Rounter, Route, Router, Routes } from "react-router-dom"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/projects" element={ <ProjectGallery /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </Router>
  )
}

export default App
