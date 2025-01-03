import React from "react";
import ProfileImg from "../assets/ProfileImg.jsx";
import CodeIcon from "../assets/CodeIcon.jsx";
import GithubIcon from "../assets/GithubIcon.jsx";
import TikTokIcon from "../assets/TikTokIcon.jsx";
import {Link} from "react-router";
import MusicIcon from "../assets/MusicIcon.jsx";
import DragonIcon from "../assets/DragonIcon.jsx";

const Home = () => {
    return (
        <>
            <ProfileImg />
            <h1>Azul Cerulean</h1>
            <h2><CodeIcon /> Developer, <DragonIcon /> Creative, <MusicIcon /> Sound Enthusiast :3</h2>
            <p>Welcome to my page!</p>
            <Link to={"/about"}>About me</Link>
            <a href="https://github.com/AzulCerulean" target="_blank"><GithubIcon /> GitHub</a>
            <a href="https://www.tiktok.com/@azula.sama" target="_blank"><TikTokIcon /> TikTok</a>
        </>
    )
}

export default Home;