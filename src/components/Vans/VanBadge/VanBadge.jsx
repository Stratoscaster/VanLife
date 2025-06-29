import React from 'react';
import './VanBadge.css'
import Badge from "../../Badges/Badge.jsx";
import {titleCaseWord} from "../../../utils/utils.js";

export default function VanBadge({type}) {
	const typeBackgroundColors = {
		'Luxury': '#161616',
		'Simple': '#E17654',
		'Rugged': '#115E59'
	}

	type = titleCaseWord(type)

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