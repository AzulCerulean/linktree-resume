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
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/projects" element={<Projects />} />
                  <Route path="*" element={<PageNotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
