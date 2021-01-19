import React from 'react';
import './Post.css';
import {obtenerDatos} from '../Funciones/funciones';

class ListaPosts extends React.Component {
    constructor(props) {
      super(props);
      this.manejadorCambios = this.manejadorCambios.bind(this);
      this.state = {
        cargando: false,
        Post: null
      };
    }

    componentDidMount() {
      obtenerDatos(this.props, this.manejadorCambios);
    }

    manejadorCambios(vcargando, vPost) {
      this.setState({Post: vPost, cargando: vcargando});
    }

    render() {
      console.log( this.state.usuario)
      return (        
        <ul>Post:<br/>
          {
          this.state.cargando ? 'Cargando ...' : ( this.state.Post == null ?
            'No se encontraron datos.' : (
          this.state.Post.map((usuario) => (
            <li key={usuario.id}>{usuario.id} - {usuario.title}</li>
          ))))}
        </ul>
      );
    }
  }
  export default ListaPosts;
  