import React from 'react';
import './Temporizador.css';

class Temporizador extends React.Component {
  constructor(props) {
    super(props); // Invoca al constructor base
    this.state = {dateinicio: new Date(),cronometro:  '' };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.iteración(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  iteración() {
     let nuevafecha = new Date(); 
     const diffTimeminutos =    this.state.dateinicio.getMinutes()+2 -nuevafecha.getMinutes() 


    this.setState({
      cronometro: `${diffTimeminutos}`
    });
  }

  render() {
    return (
      <div> 
        <h2>Tiempo: {this.state.cronometro} Minutos.</h2>
      </div>
    );
  }
}
    
export default Temporizador;