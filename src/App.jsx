import './App.css'
import ProfileImg from "./assets/ProfileImg.jsx";
import GithubIcon from "./assets/GithubIcon.jsx";
import TikTokIcon from "./assets/TikTokIcon.jsx";
import CodeIcon from "./assets/CodeIcon.jsx";

function App() {

  return (
      <>
          <ProfileImg />
          <h1>Azul Cerulean</h1>
          <h2><CodeIcon /> Wip :3</h2>
          <p>Welcome to my page!</p>
          <a href="https://github.com/AzulCerulean" target="_blank"><GithubIcon /> GitHub</a>
          <a href="https://www.tiktok.com/@azula.sama" target="_blank"><TikTokIcon /> TikTok</a>
      </>
  )
}

export default App
