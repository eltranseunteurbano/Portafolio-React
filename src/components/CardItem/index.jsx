import React from 'react';
import './index.scss';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const CardItem = ({ title, institution , startDate = '', endDate = '', description, url, location, type }) => {

  const [finishDate, setFinishDate] = React.useState(endDate);
  const [initialDate, setInitialDate] = React.useState(startDate);
  const [currentTime, setCurrentTime] = React.useState(0)
  const [currentTimeYear, setCurrentTimeYear] = React.useState(0)

  //Transformar la fecha final si actualmente lo curso
  React.useEffect(() => {
    if (endDate === 'now') {
      let month = new Date().getMonth();
      let year = new Date().getFullYear();
      setFinishDate([month, year])
    } else {
      let temp = endDate.split('-');
      let month = new Date( parseInt(temp[0]), parseInt(temp[1]) - 1, 15, 0, 0, 0, 0 ).getMonth();
      let year = new Date( parseInt(temp[0]), parseInt(temp[1]) - 1, 15, 0, 0, 0, 0 ).getFullYear();
      setFinishDate([month, year])
    }
  }, [endDate])

  //Transformo la fecha inicial
  React.useEffect(() => {
    let temp = startDate.split('-');
    let month = new Date( parseInt(temp[0]), parseInt(temp[1]) - 1, 15, 0, 0, 0, 0 ).getMonth();
    let year = new Date( parseInt(temp[0]), parseInt(temp[1]) - 1, 15, 0, 0, 0, 0 ).getFullYear();
    setInitialDate([month, year,] )
  }, [startDate])

  //Transformo el tiempo transcurrido
  React.useEffect(() => {
    let value = finishDate[0] - initialDate[0]
    let valueYear = finishDate[1] - initialDate[1]
    let finalValue = ( value + 1 ) + ( 12 * valueYear )
    let finalValueYear = Math.floor(finalValue / 12);

    setCurrentTime(finalValue)
    setCurrentTimeYear(finalValueYear);
  }, [initialDate, finishDate])
  

  return(
    <div className='CardItem'>
      <h1 className='CardItem__title'>{title}</h1>
      <a href={url} target='_blank' rel='noopener noreferrer' className='CardItem__subtitle'>{institution}</a>
      <p className='CardItem__city'>{location}</p>
      <p className='CardItem__date'>
        <span>{`
          ${MONTHS[initialDate[0]]} ${initialDate[1]} - ${MONTHS[finishDate[0]]} ${finishDate[1]}
          `}
        </span>
        {type === 'study' ? '' :
        <span>
        {`| 
          ${currentTimeYear > 0 ? currentTimeYear : ''} ${currentTimeYear > 0 ? currentTimeYear > 1 ? 'años  y' : 'año  y' : ''}
          ${currentTime > 12 ? currentTime - 12 : currentTime} ${currentTime > 1 ? 'meses' : 'mes' }
          `}
        </span>
      }
      </p>
      <p className='CardItem__description'>{description}</p>
    </div>
  )
}

export default CardItem;