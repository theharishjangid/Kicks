import React from 'react';
import "./CategoriesCard.scss";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const CategoriesCard = (props) => {
    const styles = {
        backgroundColor: props.id % 2 === 0 ? "#FAFAFA": "#ECEEF0"
    }
  return (
    <div className='app__flex category_card__container' style={styles}>
        <img src={props.image} alt={props.name}/>
        <div className='category_card__container-title'>
            <p>{props.name} Shoes</p>
            <BsFillArrowUpRightSquareFill />
        </div>

    </div>
  )
}

export default CategoriesCard