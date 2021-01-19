import React from 'react';
import './MenuLateral.css'; 
import Elemento from './Elemento';
/**
 * MenuLateral
 * Props: 
 * Terminados:Cantidad de evaluaciones que el usuario ha completado
 * Pendientes:Cantidad de evaluaciones que el usuario tiene pendientes
 * State:
 * CantidadEvaluaciones: Guarda los valores de las evaluaciones en caso que en el props no venga la evaluacion esta sera 0
 * Terminados: Se iguala al props de terminados
 * Pendientes:Cantidad de evaluaciones que el usuario tiene pendientes
 * 
 * Renderizado: Cuando la cantidad sea 0 , el elemento no sera renderizado
 */
class MenuLateral extends React.Component {
  constructor(props) {
    super(props); // Invoca al constructor base
    this.state = {CantidadEvaluaciones: {Pendientes:0,Terminadas:0}};
  }

  
  componentDidMount() { 
    let Pendientes = typeof this.props.Pendientes === "undefined" ? 0 : this.props.Pendientes;
    let Terminadas = typeof this.props.Terminadas === "undefined" ? 0 : this.props.Terminadas;
    this.setState({
      CantidadEvaluaciones:  {Pendientes:Pendientes,Terminadas:Terminadas}
    });
 
  }

  componentWillUnmount() {
 
  }

  render() {
    let  ElementosAdicionales = this.props.ElementosAdicionales
    return (
      <div> 
        
              <div class="col-md-12">
              <div class="list-group">
              <a href="index.html" class="list-group-item active main-color-bg">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Status
              </a> 
               <Elemento  Titulo={'Pendientes'}  Cantidad={this.state.CantidadEvaluaciones.Pendientes} /> 
               <Elemento  Titulo={'Terminados'}  Cantidad={this.state.CantidadEvaluaciones.Terminadas} /> 
            
              {
              ElementosAdicionales.map((ElementosAdicionales) =>     
              <Elemento key={ElementosAdicionales.id.toString()}
               Titulo= {ElementosAdicionales.Titulo} Cantidad= {ElementosAdicionales.Cantidad} />)
               }
            </div>
            </div>
             
      </div>
    );
  }
}
     
 
export default MenuLateral;
