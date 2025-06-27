import {COLORS} from './badgeColors.js'
import './Badges.css'
export default function Badges({children}) {
	return (
		<div className={"badge-container"}>
			{children}
		</div>
	);
}