import React from 'react';
import './HostVan.css';
import {Link} from 'react-router-dom';
export default function HostVan({id, name, price, imageUrl}) {
	return (
		<Link to={`/host/vans/${id}`}>
			<div className={'HVAN__container'}>
				{name}
			</div>
		</Link>
	);
}