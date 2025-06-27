import {clsx} from 'clsx'
import {COLORS} from './badgeColors.js'
import './Badges.css'

export default function Badge({theme = 'blue', type='pill', color, backgroundColor, children}){
	theme = theme.toLowerCase()
	const isSquare = type === 'square';
	const isPill = type === 'pill';
	let classNames = clsx({
		square: isSquare,
		pill: isPill || (!isPill && !isSquare),
		badge: true
	})
	let colorStyling = {}
	// If a theme was specified, then apply it
	if (Object.keys(COLORS).includes(theme)) {
		classNames += ` ${theme}`

	// If specific color stylings were specified, apply them
	} else if (color && backgroundColor){
		colorStyling = {
			'color': color,
			'backgroundColor': backgroundColor
		}
	}
	return (
		<div className={classNames} style={colorStyling}>
			{children}
		</div>
	)
}