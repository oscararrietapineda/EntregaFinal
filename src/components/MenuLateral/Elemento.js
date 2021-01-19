import React from 'react';
 /**
 * Elementos
 * Sirve para renderizar cada elemento en el menu lateral
 * Props: 
 * Cantidad:Cantidad del elemento a renderizar
 * Titulo: El titulo a mostrar por ejemplo Terminados
 * Renderizado: Cuando la cantidad sea 0 , el elemento no sera renderizado
 */
function Elemento(props) {
    return (
      <div>
         { props.Cantidad === 0 ? null :
          <a href="/Perfil" className="list-group-item">
          <span className="glyphicon glyphicon- " aria-hidden="true"></span> {props.Titulo} 
          <span className="badge"></span> {props.Cantidad}</a>
         }
      </div>
    );
  }
  
export default Elemento;
