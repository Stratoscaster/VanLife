import React from 'react';
import './Reviews.css';
import Meter from '../../utils/Meter.jsx';
import VanReview from "../VanReview/VanReview.jsx";
import {RotatingLines} from "react-loader-spinner";
import {IoIosStar as Star} from "react-icons/io";
export default function Reviews() {
    const [reviews, setReviews] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);
    React.useEffect(() => {
        fetch('/api/host/reviews').then(
            response => {
                response.json().then(
                    body => {
                        setReviews(body.reviews);
                        setErrorMessage(null);
                    }
                ).catch(err => {
                    console.error(err);
                    setErrorMessage('Could not load vans. Try again later.')
                }).finally(() => setIsLoaded(true));
            }
        ).catch(err => {
            console.error(err);
            setErrorMessage('Could not load vans. Try again later.')
        })
    }, [])

    // Rating Summary Calculations
    // console.log('reviews: ' + JSON.stringify(reviews, null, 2));
    let ratingAverage = 0;
    const ratingTotals = {}
    for (let review of reviews ?? []) {
        ratingAverage += review.rating;
        ratingTotals[review.rating] = ratingTotals[review.rating] + 1 || 1;
    }
    ratingAverage = reviews?.length > 0 ? ratingAverage / reviews.length : 0;
    // console.log('ratingTotals: ' + JSON.stringify(ratingTotals, null, 2));
    const ratingPercentages = [];
    for (let rating in ratingTotals ?? []) {
        const ratingTotal = ratingTotals[rating];
        const ratingPercentage = ((ratingTotal && reviews?.length) ? ratingTotal / reviews?.length : 0);
        ratingPercentages[rating] = {
            rating,
            display: (ratingPercentage * 100).toFixed(0) + "%",
            value: ratingPercentage
        };
    }
    console.log('ratingPercentages: ' + JSON.stringify(ratingPercentages, null, 2));

    // Reviews
    const reviewElements = [];
    for (let review of reviews ?? []) {
        reviewElements.push(<VanReview
            id={review.id}
            name={review.name}
            date={review.date}
            rating={review.rating}
            text={review.text}
            key={review.id}
        />)
        reviewElements.push(<hr width={'80%'} align={'left'} color={'lightgray'} style={{marginBlock: '20px'}}/>)
    }

    const ratingBarCharts = ratingPercentages.map((ratingPercentage) => {
        const {rating, display, value} = ratingPercentage;
        return (
            <div className={'REVIEWS__bar-chart-contain'} key={rating + '-progress-bar'}>
                <p>{rating} stars</p>
                <div className={'REVIEWS__bar-chart-progress'}>
                    <Meter minValue={0} maxValue={1} value={value}/>

                </div>
                <p>{display}</p>
            </div>
        )
    });


    const loaderStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30vh'
    }

    return (<>
        <div className={'REVIEWS__page-container'}>
            {
                !isLoaded ?
                    <div style={loaderStyle}>
                        <RotatingLines
                            strokeColor={'grey'}
                            strokeWidth={"5"}
                            animationDuration={"0.75"}
                            width={"96"}
                            visible={true}
                        />
                    </div>
                    :
                    <div className={'REVIEWS__page-content-container'}>
                        <h1>Your Reviews</h1>
                        <span><h1>{ratingAverage.toFixed(1)}</h1><Star color={'orange'} size={'32px'}/><p>overall rating</p></span>
                        <div className={'REVIEWS__bar-chart-list-contain'}>
                            {ratingBarCharts}
                        </div>
                        <div className={'REVIEWS__reviews-container'}>
                            <h2>Reviews {reviews ? `(${reviews.length})` : ''}</h2>
                            {reviewElements}
                        </div>
                    </div>
            }
        </div>
    </>);
}