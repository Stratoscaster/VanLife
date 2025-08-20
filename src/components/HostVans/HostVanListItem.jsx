import React from 'react';
import './HostVanListItem.css';
import {Link} from 'react-router-dom';
export default function HostVanListItem({id, name, price, imageUrl}) {
	return (
		<Link to={`/host/vans/${id}`}>
			<div className={'HVAN__container'}>
				<div className={'HVAN__content_contain'}>
                    <div className={'HVAN__image_contain'}>
                        <img src={imageUrl}/>
                    </div>
                    <div className={'HVAN__text_contain'}>
                        <h3>{name}</h3>
                        <p>${price}/day</p>
                    </div>
                </div>
                <div className={'HVAN__edit_contain'}>
                    <p>Edit</p>
                </div>
			</div>
		</Link>
	);
}