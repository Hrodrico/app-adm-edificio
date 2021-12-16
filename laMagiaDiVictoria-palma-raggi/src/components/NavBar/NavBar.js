import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Segment, Icon } from 'semantic-ui-react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary size='large' className = 'container-navbar'>
            <NavLink to="/" >
                <Menu.Item 
                    name='inicio'
                    active={activeItem === 'inicio'}
                    onClick={this.handleItemClick}>
                    <Icon name='home'/> 
                    Inicio
                </Menu.Item>
            </NavLink>

            <Dropdown item text='Categorias'
                 active={activeItem === 'Categorias'}
                 onClick={this.handleItemClick}
                 >
                <Dropdown.Menu>
                    <Dropdown.Item><NavLink className="navlink" to="/category/accesorios">Bolsos y Accesorios</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="navlink" to="/category/lociones">Cuidado Corporal</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="navlink" to="/category/fragancia">Fragancia</NavLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Menu.Menu position='right'>
                <NavLink to="/cart">
                    {/* <Menu.Item name='cart' active={activeItem === 'cart'} onClick={this.handleItemClick} >
                        <CartWidget/> 
                    </Menu.Item> */}
                      <Menu.Item as='a'>
                        {/* <Icon name='cart' />  */}
                        <CartWidget/> 
                        
                      </Menu.Item>
                </NavLink>
            </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
export default NavBar