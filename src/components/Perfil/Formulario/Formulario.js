import React, {useRef} from 'react';
import './Formulario.css';
import actualizarResultado from '../../redux/store/Resultado/action'
import { connect } from 'react-redux';

const Formulario = ({actualizarResultado}) => {  
       const resultadoRef = useRef(null);
       const resultadoRef2 = useRef(null);
       const onButtonClick = () => {
         actualizarResultado(resultadoRef.current.value, resultadoRef2.current.value);
       }
        return (
          <div>
            <div class="container">
              <div class="jumbotron"> 
              <div class="form-group">
            <label for="usr">Usuario:</label>
            <input type="text" class="form-control" ref={resultadoRef} id="usuario"/>
          </div>
          <div class="form-group">
            <label for="pwd">Nombre:</label>
            <input type="text" class="form-control"  ref={resultadoRef2} id="nombre"/>
          </div>
          <button className="btn btn-success" onClick={onButtonClick}>Guardar datos</button> 
                </div> 
            </div>     

          </div>
        );

  }
  
// Se conecta con Redux: null = indica si desea recuperar algo de la "store"
export default connect(null, {actualizarResultado}) (Formulario);



