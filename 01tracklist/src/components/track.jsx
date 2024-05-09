import React from 'react';
import '../css/track.css';

function Track(props){
  return(
    <div className='contenedor-track'>
      <img
        className='imagen-track'
        src={require(`../images/imagen-${props.imagen}.jpg`)}
        alt='foto de cancion'/>
      <div className='contenedor-texto-track'>
          <p className='nombre-track'>{props.titulo}</p>
          <p className='year-track'>{props.year}</p>
          <p className='album-track'>Album: {props.album}</p>
          <p className='texto-track'>{props.texto}</p>
      </div>
    </div>
   
  );
}

export default Track;