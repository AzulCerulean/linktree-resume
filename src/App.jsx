import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Projects from "./Pages/Projects.jsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="*" element={<PageNotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
