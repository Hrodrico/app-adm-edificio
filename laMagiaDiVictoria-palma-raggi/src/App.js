import React, { Component } from 'react';
import './App.css';

// Components
import HeaderFloating from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductCard from './components/ProductCard/ProductCard';

//Img
import logo from './assets/images/magia_di_victoria.png'
import honey_mask from './assets/images/p_honey_mask.jpeg'
import hand_spray from './assets/images/p_antibacterial_hand_spray.jpeg'
import billetera from './assets/images/p_billetera.jpeg'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<HeaderFloating imgBusiness={logo} nameBusiness="La Magia Di Victoria"/>				
				<NavBar /> 
				<ItemListContainer greeting="Bienvenido a Min-Deptos!!!"/>
				<div className='UserSection'>
					<ProductCard
						name='Antibacterial Hand Spray'
						date='24-Nov-2021'
						description='Spray antibacterial'
						img={hand_spray}
					/>
					<ProductCard
						name='Honey Mask'
						date='24-Nov-2021'
						description='Mascarilla, limpia y exfolia, todo en uno. Incluye menta, cáscara de limón y miel para nutrir y suavizar en un solo paso refrescante. Usar en la cara y el cuerpo para un tratamiento de pies a cabeza.'
						img={honey_mask}
					/>
					<ProductCard
						name='Billetera Victoria Secret`s'
						date='24-Nov-2021'
						description='Billeteras Victoria Secret`s'
						img={billetera}
					/>					
				</div>
				
			</div>
		);
	}
}

export default App;
