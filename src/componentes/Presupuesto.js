import React, { Component } from 'react';
/**
 * este paquete sirve para documentar mis componentes y decir que tipo de dato van a recibir
 */
import PropTypes from 'prop-types';

class Presupuesto extends Component {
    render() {
        return (
            <div className="alert alert-primary">
                Presupuesto: $ {this.props.presupuesto}
            </div>
        );
    }
}

/**
 * Especificar que tipo de dato recibira en el props, en este caso se almacenan como string por eso se especifica asi
 */
Presupuesto.protoTypes = {
    presupuesto : PropTypes.string.isRequired,
}

export default Presupuesto;