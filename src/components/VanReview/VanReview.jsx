import React from 'react';
import {IoIosStar as Star, IoIosStarOutline as StarOutline} from "react-icons/io";
import './VanReview.css';
export default function VanReview({id, name, date, rating, text}) {
    // console.log('VanReview', id, name, date, rating, text);
    rating = rating ?? 5;
    const starElements = [];
    const emptyStars = 5 - rating;

    for (let i = 0; i < rating; i++) {
        starElements.push(<Star
            color={'orange'}
        />)
    }

    for (let i = 0; i < emptyStars; i++) {
        starElements.push(<StarOutline
            color={'black'}
        />);
    }
    return (
        <>
            <div className={'VREV__rating-container'}>
                {starElements}
            </div>
            <div className={'VREV__name-date-container'}>
                <p className={'VREV__name'}>{name}</p>
                <p className={'VREV__date'}>{date}</p>
            </div>
            <p className={'VREV__text'}>{text}</p>
        </>
    )
}