import React from 'react';
import './Respuestas.css';

function Respuestas(props) {
    return (
      <div>
      <div className="Preguntas"> 
      <input type="radio" value={props.valor} name={props.idPregunta} />  {props.Respuesta} 
      </div> 
    </div>
    );
  }
  
export default Respuestas;
