import React from 'react';
import './VanBadge.css'
import Badge from "../../Badges/Badge.jsx";
export default function VanBadge({type}) {
	const typeBackgroundColors = {
		'Luxury': '#161616',
		'Simple': '#E17654',
		'Rugged': '#115E59'
	}

	return (
		<div className={'van-type-container'}>
			<Badge color={"#FFEAD0"}
				   type={'square'}
				   backgroundColor={typeBackgroundColors[type]}>
				{type}
			</Badge>
		</div>
	);
}