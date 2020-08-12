import React from 'react';
import './index.scss';

const CardItem = ({title = 'Aquí va el titulo', institution = 'Aquí va la institución', starDate = 'Febrero 2020', endDate = 'Actualidad', time = '5 meses', description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui eget eu blandit gravida adipiscing sed arcu. Sed dignissim aliquam bibendum amet dui tempus velit tortor diam. Faucibus mattis turpis interdum fermentum malesuada.'}) => {
  return(
    <div className='CardItem'>
      <h1 className='CardItem__title'>{title}</h1>
      <h2 className='CardItem__subtitle'>{institution}</h2>
      <span className='CardItem__date'>{starDate} - {endDate} | {time}</span>
      <p className='CardItem__description'>{description}</p>
    </div>
  )
}

export default CardItem;