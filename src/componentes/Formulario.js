import React, { Component } from 'react';
/**
 * este paquete sirve para documentar mis componentes y decir que tipo de dato van a recibir
 */
import PropTypes from 'prop-types';

class Formulario extends Component {
    
    /**
     * Refs para leer los campos del formulario
     */
    nombreGastoRef   = React.createRef();
    cantidadGastoRef = React.createRef();;

    crearGasto = (e) => {
        /**
         * Prevenir el evento
         */
        e.preventDefault();

        /**
         * Crear objeto con los datos
         */
        const gasto = {
            nombreGasto : this.nombreGastoRef.current.value,
            cantidadGasto : this.cantidadGastoRef.current.value,
        }
        //console.log(gasto);

        /**
         * Agregar los datos y enviarlo por prop al padre App.js
         */
        this.props.agregarGasto(gasto);


        /**
         * Resetear formulario
         */
        e.currentTarget.reset();
    }
    
    render() {
        /**
         * crearGasto, funcion a donde se enviaran los datos
         */
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

/**
 * Especificar que tipo de dato recibira en el props, en este caso es una funcion
 */
Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Formulario;