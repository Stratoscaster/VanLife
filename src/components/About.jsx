import React from "react";
import aboutImage from '../assets/images/about-hero.png'
import './About.css'

export default function About() {
	return (
		<div className={'ABOUT__background-container'}>
			<img className={'ABOUT__background-image'}
				 src={aboutImage}/>
			<div className={'ABOUT__content-container'}>
				<div className={'ABOUT__content-flex'}>
					<div className={'ABOUT__title-flex'}>

						<h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
					</div>
					<p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are
						recertified before each trip to ensure your travel plans can go off without a hitch.

						Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4
						wheels.</p>
					<div className={'ABOUT__explore-container'}>
						<h2>Your destination is waiting. <br/>Your van is ready.</h2>
						<button><p>Explore our vans</p></button>
					</div>
				</div>
			</div>
		</div>
	);
}