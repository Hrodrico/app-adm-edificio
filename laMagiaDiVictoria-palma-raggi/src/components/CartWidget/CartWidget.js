import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
// import { FiShoppingCart } from "react-icons/fi";
import {  Icon } from 'semantic-ui-react'
import './CartWidget.css'

function CartWidget () {
    const { itemCard } = useContext(CartContext);
    console.log('CardWidget.cart::', itemCard);
    
    const productQuantity = itemCard.reduce((totalCart, item) => totalCart + item.quantity, 0);

    return (
        <div className="item-cartWidget">
            <a href="/cart" className="item-cartWidget-link">
                <Icon name='cart' className="item-cartWidget-icon" /> 
                {itemCard.length > 0 &&  <span className="item-cartWidget-total"> { productQuantity } </span>}
            </a>
        </div>
    )
}

export default CartWidget;
