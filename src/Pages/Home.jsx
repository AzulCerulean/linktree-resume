import React from "react";
import ProfileImg from "../assets/ProfileImg.jsx";
import CodeIcon from "../assets/CodeIcon.jsx";
import GithubIcon from "../assets/GithubIcon.jsx";
import TikTokIcon from "../assets/TikTokIcon.jsx";
import {Link} from "react-router";
import MusicIcon from "../assets/MusicIcon.jsx";
import DragonIcon from "../assets/DragonIcon.jsx";
import "./Home.css";
import LinkedInIcon from "../assets/LinkedInIcon.jsx";

const Home = () => {

    return (
                <div className="homeContainer">
                    <ProfileImg />
                    <h1>Azul Cerulean</h1>
                    <h2><CodeIcon /> Developer</h2>
                    <h2><DragonIcon /> Creative</h2>
                    <h2><MusicIcon /> Sound Enthusiast :3</h2>
                    <p>Welcome to my page!</p>
                    <Link to={"/about"}>About me</Link>
                    <a href="https://www.linkedin.com/in/azul-cerulean" target="_blank"><LinkedInIcon /> LinkedIn</a>
                    <a href="https://github.com/AzulCerulean" target="_blank"><GithubIcon/> GitHub</a>
                    <a href="https://www.tiktok.com/@azula.sama" target="_blank"><TikTokIcon/> TikTok</a>
                    <Link to={"/projects"}>Projects</Link>
                </div>
    )
}

export default Home;