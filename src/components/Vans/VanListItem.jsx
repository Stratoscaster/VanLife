import React from "react";
import './VanListItem.css'
import VanBadge from "./VanBadge/VanBadge.jsx";
import {titleCaseWord} from "../../utils/utils.js";
import {Link} from "react-router-dom";

export default function VanListItem({id, name, price, description, imageUrl, type, search}) {
	type = titleCaseWord(type)

	return (
		<Link to={`${id}`} state={search}>
			<div className={"van-container"}>
				<div className={"van-image-container"}>
					<img src={imageUrl}/>
				</div>

				<div className={"van-info-container"}>
					<div className={"van-name-type-container"}>
						<div className={'van-name-container'}>
							{name}
						</div>

						<VanBadge type={type}/>
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
		</Link>
	)
}

