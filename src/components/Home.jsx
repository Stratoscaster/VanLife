import React from "react";
import NavBar from "./NavBar/NavBar.jsx";
import homeImage from '../assets/images/home-hero.png';
import './Home.css';
export default function Home() {
	return (
		<div className={'HOME__page-container'}>
			<img className={'HOME__background-image'} src={homeImage}/>
		</div>
	);
}