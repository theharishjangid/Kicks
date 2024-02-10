import React from 'react';
import "./ReviewCard.scss";
import { BsStar, BsStarHalf, BsStarFill} from "react-icons/bs";

const ReviewCard = (props) => {
    const getStars = (rating) => {
        const star_list = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            star_list.push(<BsStarFill className='rating' />);
          } else if (i - 0.5 === rating) {
            star_list.push(<BsStarHalf className='rating' />);
          } else {
            star_list.push(<BsStar className='rating' />);
          }
        }
        return star_list
      };
  return (
    <div className="app__flex review_card__container">
        <div className="app__flex review_card__container-top">
            <div className='app__flex review_card__container-top-section'>
                <div>
                    <h5>{props.name}</h5>
                    <p>{props.feedback}</p>
                </div>
                <img src={props.profile_img} alt={`profile-${props.name}`}/>
            </div>
            <div className='review_card__container-ratings'>
                <div className='app__flex'>
                    {getStars(props.rating).map((star) => (star))}
                </div>
                {props.rating}
            </div>
        </div>
        <img src={props.review_img} alt={`review-${props.name}`}/>
    </div>
  )
}

export default ReviewCard