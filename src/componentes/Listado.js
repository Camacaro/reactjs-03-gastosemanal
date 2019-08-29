import React, { Component } from 'react';
import Gasto from './Gasto';
/**
 * este paquete sirve para documentar mis componentes y decir que tipo de dato van a recibir
 */
import PropTypes from 'prop-types';

class Listado extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listados</h2>
                { Object.keys( this.props.gastos ).map(key =>(
                    <Gasto
                        key={key}
                        gasto={ this.props.gastos[key] }
                    />
                ) ) }
                
            </div>  
        );
    }
}

/**
 * Especificar que tipo de dato recibira en el props, en este caso se almacenan como string por eso se especifica asi
 */
Gasto.protoTypes = {
    gastos : PropTypes.object.isRequired,
}

export default Listado;