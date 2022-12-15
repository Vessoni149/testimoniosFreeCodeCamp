import React from 'react';
import '../estilos/Testimonio.css'

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require(`../imagenes/testimonio-${props.imagen}.jpeg`)}
      alt={props.alt}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;

//En la img, dentro del atributo src es necesario poner el require para incertar una igamnes directamente, no se puede solo escribir la direccion de la img. Tambien se puede importar.