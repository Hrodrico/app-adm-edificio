import './NavBar.css';
import { Icon } from 'semantic-ui-react';
import CartWidget from '../CartWidget/CartWidget'

// import us from '../Nosotros/Nosotros';
// import service from '../Servicio/Servicio';
// import contact from '../Contacto/Contacto';

const NavBar = () => {
	return (
		<nav className='container'>
			<a href="/" className="nav-enlace"><Icon name='home'/>Inicio</a>
            <a href="/us" className="nav-enlace"><Icon name='users'/>Nosotros</a>
            <a href="/service" className="nav-enlace"><Icon name='box'/>Servicio</a>
            <a href="/contact" className="nav-enlace"><Icon name='mail'/>Contacto</a>
			<a href="/cart" className="nav-enlace-cart"><CartWidget/> </a>
		</nav>
	);
};

export default NavBar;
