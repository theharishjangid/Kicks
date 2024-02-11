import React from 'react';
import './PrimaryButton.scss';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = (props) => {
  const navigate = useNavigate();
  return (
    <button className='primary_button' onClick={() => {navigate(props.to)}}>{props.name}</button>
  )
}

export default PrimaryButton