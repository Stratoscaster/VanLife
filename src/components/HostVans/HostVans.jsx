import React from 'react';
import './HostVans.css';
import HostVan from "./HostVan.jsx";

export default function HostVans() {
	const [vans, setVans] = React.useState([]);

	React.useEffect(() => {
		fetch('/api/host/vans').then(
			response => {
				response.json().then(
					body => {
						setVans(body.vans)
					}
				).catch(err => console.error(err))
			}
		).catch(err => console.error(err))
	}, [])

	const vanElements = [];

	for (const van of vans) {
		vanElements.push(
			<HostVan
				id={van.id}
				name={van.name}
				price={van.price}
				imageUrl={van.imageUrl}
			/>
		)
	}

	console.log(vanElements)

	return (
		<div className={'HVANS__flex-center'}>
			<div className={'HVANS__flex-columns'}>
				{vanElements}
			</div>
		</div>
	)
}