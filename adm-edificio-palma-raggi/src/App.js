import React, { Component } from 'react';
import './App.css';

// Components
import HeaderFloating from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductCard from './components/ProductCard/ProductCard';




class App extends Component {
	render() {
		return (
			<div className='App'>
				<HeaderFloating/>				
				<NavBar /> 
				<ItemListContainer greeting="Bienvenido a Min-Deptos!!!"/>
				<div className='UserSection'>
					<ProductCard
						name='Santa Clara / Huechuraba'
						date='Publicado hace 2 meses'
						description='Acogedora casa de 2 pisos, consta de living comedor, cocina, acceso para vehículo techado, orientada al Sur. 83m2/122m2 aprox. Excelente ubicación, cercano a comercio variado, áreas verdes y a estación de metro Vespucio Norte. Santa Clara / Huechuraba'
						img='https://http2.mlstatic.com/D_NQ_NP_994448-MLC47634098749_092021-O.webp'
					/>
					<ProductCard
						name='Edificio Pirineos'
						date='Proyecto - Entrega 3 Trimestre 2021'
						description='Edificio Pirineos de Inmobiliaria Inspira es un edificio que combina perfectamente la esencia de la comuna de Providencia, usando elementos arquitectónicos de los años 50 con un estilo moderno que rompe el concepto tradicional.

						Está ubicado en un sector privilegiado de Providencia. A una cuadra de Pedro de Valdivia, a 3 cuadras de Av. Francisco Bilbao y de la estación de Metro Inés de Suárez. Cercano a comercios, colegios, supermercados, restaurantes, parques, plazas, bancos y todo lo que necesites.'
						img='https://http2.mlstatic.com/D_NQ_NP_850858-MLC48196018761_112021-O.webp'
					/>
					<ProductCard
						name='Casa Condominio La Toscana, Huechuraba'
						date='Publicado hace 24 días'
						description='Oficina de propiedades ofrece hermosa casa en condominio ubicada en la comuna de Huechuraba, cuenta con seguridad las 24 horas, áreas verdes, sector tranquilo, amplias calles de acceso, cercana a colegios, supermercados, mall y autopistas.
						Tramitamos crédito hipotecario en diferentes bancos, obteniendo la mejor opción para su compra.'
						img='https://http2.mlstatic.com/D_NQ_NP_854005-MLC47792570749_102021-O.webp'
					/>
				</div>
			</div>
		);
	}
}

export default App;
