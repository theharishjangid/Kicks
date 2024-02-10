import React from 'react';
import './PrimaryButton.scss';

const PrimaryButton = (props) => {
  return (
    <button className='primary_button'>{props.name}</button>
  )
}

export default PrimaryButton