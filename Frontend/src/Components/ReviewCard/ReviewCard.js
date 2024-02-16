import React from 'react';
import "./ReviewCard.scss";
import { BsStar, BsStarHalf, BsStarFill} from "react-icons/bs";

const ReviewCard = (props) => {
    const getStars = (rating) => {
        const star_list = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            star_list.push(<BsStarFill key={i} className='rating' />);
          } else if (i - 0.5 === rating) {
            star_list.push(<BsStarHalf key={i} className='rating' />);
          } else {
            star_list.push(<BsStar key={i} className='rating' />);
          }
        }
        return star_list
      };
  return (
    <div className="app__flex review_card__container">
        <div className="app__flex review_card__container-top">
            <div className='app__flex review_card__container-top-section'>
                <div>
                    <h6>{props.name}</h6>
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