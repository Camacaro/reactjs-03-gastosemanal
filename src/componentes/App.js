import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from '../Helper';
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {
	
	/**
	 * Creando el state
	 */
	state = {
		presupuesto: '',
		restante: '',
		gastos: {}
	}

	/**
	 * Esta funcion se ejecuta al cargar el componente en pantalla
	 */
	componentDidMount(){
		this.obtenerPresupuesto();
	}

	obtenerPresupuesto = () => {
		
		let presupuesto = prompt('Cual es su presupuesto)');
		
		if( validarPresupuesto(presupuesto) ){
			
			this.setState({
				presupuesto,
				restante: presupuesto
			});

		}else {
			this.obtenerPresupuesto();
		}
		
	}


	/**
	 * Agregar un nuevo gasto al state, atraves del formulario hijo que nos manda la informacion
	 */
	agregarGasto = (gasto) => {
		/**
		 * Crear una copia del state actual, copiar un objeto con el spreate operetor
		 */
		const gastos = {...this.state.gastos};

		/**
		 * Crear una key unica al array gastos, y agregamos esa key al arrey con su respectivo dato
		 */
		gastos[`gasto${Date.now()}`] = gasto;

		/**
		 * Mandamos el gasto ingresado para restar al presupuesto
		 */
		this.restarPresupuesto(gasto.cantidadGasto);

		/**
		 * Ahora le ponemos los datos viejo y el nuevo al  state
		 */
		this.setState({
			gastos
		});
	}

	/**
	 * Restar al presupuesto de acuerdo a lo que vaya entrando en los gastos
	 */
	restarPresupuesto = (canitdad) => {
		/**
		 * leer el gasto
		 */
		let restar = Number(canitdad);

		/**
		 * Tomar copia del state actual
		 */
		let restante = this.state.restante;

		/**
		 * Restar monto
		 */
		restante -= restar;

		/**
		 * Ahora lo convertimos en string
		 */
		restante = String(restante);

		/**
		 * Actualizamos el state
		 */
		this.setState({
			restante
		});
	}

	render() {
		const titulo = 'Gasto Semanal';
		
		return (
			<div className="App container">
				<Header 
					titulo={titulo}
				/>

				<div className="contenido-principal contenido">
					<div className="row">

						<div className="one-half column">
							<Formulario
								agregarGasto={this.agregarGasto}
							/>
						</div>

						<div className="one-half column">
							<Listado
								gastos={this.state.gastos}
							/>

							<ControlPresupuesto
								presupuesto={this.state.presupuesto}
								restante={this.state.restante}
							/>
						</div>
					</div>

				</div>
				
			</div>
		);
  	}
}

export default App;
