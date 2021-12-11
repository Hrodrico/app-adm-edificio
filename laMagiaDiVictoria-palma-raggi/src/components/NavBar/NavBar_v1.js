import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget'


const NavBar_v1 = () => {

	return (
		<nav className='container'>
			<NavLink to="/"  className="nav-enlace"><Icon name='home'/>Inicio</NavLink>
            <NavLink to="/categorys/:categoryId"  className="nav-enlace"><Icon name='boxes'/>Categorias</NavLink>
            <NavLink to="/category/Cocktail"  className="nav-enlace"><Icon name='glass martini'/>Cocktail</NavLink>
			<NavLink to="/category/Shot"  className="nav-enlace"><Icon name='glass martini'/>Shot</NavLink>
			<NavLink to="/carro"  className="nav-enlace"><CartWidget/></NavLink>
		</nav>
	);
};

export default NavBar_v1;
