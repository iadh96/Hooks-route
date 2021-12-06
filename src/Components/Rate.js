import React from 'react'
import ReactStars from "react-rating-stars-component";

function Rate({setRating}) {
    const ratingChanged = (newRating) => {
        setRating(newRating);
      };
    return (
        <div>
            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        </div>
    )
}

export default Rate
