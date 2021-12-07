import React, { Component } from 'react'
import { Menu, Dropdown, Segment } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar2 extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary size='tiny'>
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
                    <Dropdown.Item><NavLink className="navlink" to="/category/Cocktail">Cocktail</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="navlink" to="/category/Ordinary Drink">Ordinary Drink</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="navlink" to="/category/Shot">Shot</NavLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Menu.Menu position='right'>
                <NavLink to="/carro">
                    <Menu.Item
                        name='carro'
                        active={activeItem === 'carro'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='cart'/>
                        Carro
                    </Menu.Item>
                </NavLink>
            </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
export default NavBar2