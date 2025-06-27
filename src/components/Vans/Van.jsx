import React from "react";
import './Van.css'
import Badge from "../Badges/Badge.jsx";

export default function Van({id, name, price, description, imageUrl, type}) {
	type = titleCaseWord(type)
	const typeBackgroundColors = {
		'Luxury': '#161616',
		'Simple': '#E17654',
		'Rugged': '#115E59'
	}
	return (
		<div className={"van-container"}>
			<div className={"van-image-container"}>
				<img src={imageUrl}/>
			</div>

			<div className={"van-info-container"}>
				<div className={"van-name-type-container"}>
					<div className={'van-name-container'}>
						{name}
					</div>

					<div className={'van-type-container'}>
						<Badge color={"#FFEAD0"}
							   type={'square'}
							   backgroundColor={typeBackgroundColors[type]}>
							{type}
						</Badge>
					</div>
				</div>

				<div className={"van-price-container"}>
					<span>
						${price}
					</span>
					<div>
						/day
					</div>
				</div>
			</div>
		</div>
	)
}

function titleCaseWord(word) {
	return word.charAt(0).toUpperCase() + word.split('').slice(1).join('').toLowerCase()
}