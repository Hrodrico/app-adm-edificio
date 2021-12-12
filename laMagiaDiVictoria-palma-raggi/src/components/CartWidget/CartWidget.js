import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
// import { FiShoppingCart } from "react-icons/fi";
import {  Icon } from 'semantic-ui-react'
import './CartWidget.css'

function CartWidget () {
    const { itemCard } = useContext(CartContext);
    console.log('CardWidget.cart::', itemCard);

    return (
        <div className="item-cartWidget">
            <a href="." className="item-cartWidget-link">
                <Icon name='cart' className="item-cartWidget-icon" /> 
                {itemCard.length > 0 &&  <span className="item-cartWidget-total"> { itemCard.length } </span>}
            </a>
        </div>
    )
}

export default CartWidget;
