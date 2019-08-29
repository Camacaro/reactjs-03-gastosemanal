import React, { Component } from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';
/**
 * este paquete sirve para documentar mis componentes y decir que tipo de dato van a recibir
 */
import PropTypes from 'prop-types';

class ControlPresupuesto extends Component {
    render() {
        return (
            <React.Fragment>
                <Presupuesto
                    presupuesto={this.props.presupuesto}
                />
                <Restante
                    presupuesto={this.props.presupuesto}
                    restante={this.props.restante}
                />
            </React.Fragment>
        );
    }
}
/**
 * Especificar que tipo de dato recibira en el props, en este caso se almacenan como string por eso se especifica asi
 */
ControlPresupuesto.propTypes = {
    presupuesto : PropTypes.string.isRequired,
    restante    : PropTypes.string.isRequired
}

export default ControlPresupuesto;