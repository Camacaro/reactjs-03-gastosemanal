import React, { Component } from 'react';
/**
 * este paquete sirve para documentar mis componentes y decir que tipo de dato van a recibir
 */
import PropTypes from 'prop-types';

class Gasto extends Component {        

    render() {
        const {nombreGasto, cantidadGasto} = this.props.gasto;

        return (
            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto">$ {cantidadGasto}</span>
                </p>
            </li>
        );
    }
}

/**
 * Especificar que tipo de dato recibira en el props, en este caso se almacenan como string por eso se especifica asi
 */
Gasto.protoTypes = {
    gasto : PropTypes.object.isRequired,
}

export default Gasto;