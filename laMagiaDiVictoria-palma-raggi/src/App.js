import React, { Component } from 'react';
import './App.css';

// Components
import HeaderFloating from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//Img
import logo from './assets/images/magia_di_victoria.png'
// import honey_mask from './assets/images/p_honey_mask.jpeg'
// import hand_spray from './assets/images/p_antibacterial_hand_spray.jpeg'
// import billetera from './assets/images/p_billetera.jpeg'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<HeaderFloating imgBusiness={logo} nameBusiness="La Magia Di Victoria"/>				
				<NavBar/> 
				{/* <ItemListContainer greeting="Bienvenid@!!!"/> */}
				<ItemDetailContainer uid="11007" />
				
			</div>
		);
	}
}

export default App;
