import './NavBar.css';
import { Icon } from 'semantic-ui-react';

// import Nosotros from '../Nosotros/Nosotros';
// import Servicio from '../Servicio/Servicio';
// import Contacto from '../Contacto/Contacto';

const NavBar = () => {
	return (
		<nav className='container'>
			<a href="/" class="nav-enlace"><Icon name='home'/>Inicio</a>
            <a href="/nosotros" class="nav-enlace"><Icon name='users'/>Nosotros</a>
            <a href="/servicio" class="nav-enlace"><Icon name='box'/>Servicio</a>
            <a href="/contacto" class="nav-enlace"><Icon name='mail'/>Contacto</a>
		</nav>
	);
};

export default NavBar;
