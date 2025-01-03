import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
