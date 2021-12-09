import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import HeaderFloating from './components/Header/Header';
// import NavBar from './components/NavBar/NavBar'; 
import NavBar2 from './components/NavBar/NavBar2'; 
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget'

//Views[MENU]
import Home from './views/Home';
import Category from './views/Category'

//Img
import logo from './assets/images/magia_di_victoria.png'
// import honey_mask from './assets/images/p_honey_mask.jpeg'
// import hand_spray from './assets/images/p_antibacterial_hand_spray.jpeg'
// import billetera from './assets/images/p_billetera.jpeg'

//Context
import CartContextProvider from './context/CartContext'

class App extends Component {
	render() {
		return (
			<>
				{/* <CartContextProvider> */}
					<Router>
						<HeaderFloating imgBusiness={logo} nameBusiness="La Magia Di Victoria"/>				
						{/* <NavBar/>  */}
						<NavBar2/>
						<Routes>
							<Route exact path='/' element={<Home />} ></Route>
							<Route exact path='/category/:categoryId' element={<Category />} ></Route>
							<Route exact path='/item/:id' element={<ItemDetailContainer />} ></Route>
							<Route exact path='/cart' element={<CartWidget />} ></Route>
							{/* <ItemDetailContainer uid="11007" /> */}
						</Routes>
					</Router>
				{/* </CartContextProvider> */}
			</>
		);
	}
}

export default App;
