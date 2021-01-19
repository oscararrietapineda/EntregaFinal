import React from 'react';
import './Preguntas.css';

function Preguntas(props) {
    return (
      <div>
        <div className="Preguntas">
        <h4> {props.Id}. {props.contenido} - Valor {props.Valor} pts</h4>
        </div> 
      </div>
    );
  }
  
export default Preguntas;
