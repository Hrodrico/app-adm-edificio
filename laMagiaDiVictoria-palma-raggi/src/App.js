import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import HeaderFloating from './components/Header/Header';
// import NavBar from './components/NavBar/NavBar'; 
import NavBar2 from './components/NavBar/NavBar2'; 
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//Views[MENU]
import Home from './views/Home';
import Categorys from './views/Categorys'
import Category from './views/Category'

//Img
import logo from './assets/images/magia_di_victoria.png'
// import honey_mask from './assets/images/p_honey_mask.jpeg'
// import hand_spray from './assets/images/p_antibacterial_hand_spray.jpeg'
// import billetera from './assets/images/p_billetera.jpeg'

class App extends Component {
	render() {
		return (
			<>
				<Router>
					<HeaderFloating imgBusiness={logo} nameBusiness="La Magia Di Victoria"/>				
					{/* <NavBar/>  */}
					<NavBar2/>
					
					<Routes>
						<Route exact path='/' element={<Home />} ></Route>
						<Route exact path='/category/:categoryId' element={<Categorys />} ></Route>
						<Route exact path='/item/:id' element={<ItemDetailContainer />} ></Route>
						{/* <ItemDetailContainer uid="11007" /> */}
					</Routes>
				</Router>
			</>
		);
	}
}

export default App;
