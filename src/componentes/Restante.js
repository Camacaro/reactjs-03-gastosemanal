import React, { Component } from 'react';
import { revisarPresupuesto } from '../Helper';
/**
 * este paquete sirve para documentar mis componentes y decir que tipo de dato van a recibir
 */
import PropTypes from 'prop-types';

class Restante extends Component {
    render() {

        const presupuesto = this.props.presupuesto;
        const restante    = this.props.restante;

        return (
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {this.props.restante}
            </div>
        );
    }
}

/**
 * Especificar que tipo de dato recibira en el props, en este caso se almacenan como string por eso se especifica asi
 */
Restante.protoTypes = {
    presupuesto : PropTypes.string.isRequired,
    restante : PropTypes.string.isRequired,
}

export default Restante;