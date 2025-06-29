import React from "react";
import './Van.css'
import VanBadge from "./VanBadge/VanBadge.jsx";
import {titleCaseWord} from "../../utils/utils.js";
import {Link} from "react-router-dom";

export default function Van({id, name, price, description, imageUrl, type}) {
	type = titleCaseWord(type)

	return (
		<Link to={`/vans/${id}`}>
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

