import React, { Component } from 'react';
import './App.css';

// Components
import HeaderFloating from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';



import UserCard from './components/UserCard/UserCard';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<HeaderFloating/>				
				<NavBar /> 
				<div className='UserSection'>
					<UserCard
						name='Product 1'
						date='Date update 1'
						description='description 1'
						img='https://www.vinotecadelalto.cl/wp-content/uploads/2019/11/test-product.png'
					/>
					<UserCard
						name='Product 2'
						date='Date update 1'
						description='description 2'
						img='https://www.vinotecadelalto.cl/wp-content/uploads/2019/11/test-product.png'
					/>
					<UserCard
						name='Product 3'
						date='Date update 1'
						description='description 3'
						img='https://www.vinotecadelalto.cl/wp-content/uploads/2019/11/test-product.png'
					/>
				</div>
			</div>
		);
	}
}

export default App;
